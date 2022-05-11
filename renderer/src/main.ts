import puppeteer from "puppeteer";
import fetch from 'node-fetch';
import {VM} from 'vm2';
import moment from 'moment';

import { minimal_args, replaceParenthesis, standardFormat } from "./utils";

const browser = puppeteer.launch({ args: minimal_args })
moment.locale("pl")


interface IOutputOptions {
    width?: number,
    height?: number,
    darkMode: false
}

export default async function (template: string, substitutes: object, options: IOutputOptions) {
    const page = await (await browser).newPage();

    await page.setViewport({
        width: options.width ?? options.height ?? 1080,
        height: options.height ?? options.width ?? 1080
    })

    await page.emulateMediaFeatures(
        [{
            name: "prefers-color-scheme",
            value: options.darkMode ? "dark" : "light"
        }]
    )

    const vm = new VM({
        sandbox: {
            date: (format: string) => moment().format(format),
            ...substitutes
        },
        timeout: 20
    })

    let html = await (await fetch(template)).text();

    html = replaceParenthesis(html, (match) => {
        try {
            return vm.run(match)
        } catch (error) {
            console.warn(error)
            return match
        }
    });

    await page.goto(`data:text/html,${encodeURIComponent(html)}`);
    
    return await page.screenshot({
        captureBeyondViewport: false,
        type: "jpeg",
        quality: 100,
    })
}