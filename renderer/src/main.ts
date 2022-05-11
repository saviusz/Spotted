import puppeteer from "puppeteer";

import { minimal_args } from "./utils";
import generateFromTemplate from "../../html-generator";
import { FormData } from '../../common/models/FormData';


const browser = puppeteer.launch({ args: minimal_args })


interface IOutputOptions {
    width?: number,
    height?: number,
    darkMode: false
}

export default async function (template: string, substitutes: FormData, options: IOutputOptions) {
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

    const html = await generateFromTemplate(template, substitutes);

    await page.goto(`data:text/html,${encodeURIComponent(html)}`);
    
    return await page.screenshot({
        captureBeyondViewport: false,
        type: "jpeg",
        quality: 100,
    })
}