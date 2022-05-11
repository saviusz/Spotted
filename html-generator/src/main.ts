import fetch from 'node-fetch';
import {VM} from 'vm2';
import moment from 'moment';
import { FormData } from '../../common/models/FormData';
import { replaceParenthesis } from './utils';

moment.locale("pl")

export default async function(template: string, substitutes: FormData) {
    let html = await fetch(template).then(x=>x.text());
    
    const vm = new VM({
        sandbox: {
            date: (format: string) => moment().format(format),
            ...substitutes
        },
        timeout: 20
    })

    html = replaceParenthesis(html, (match) => {
        try {
            return vm.run(match)
        } catch (error) {
            console.warn(error)
            return match
        }
    });

    return html
}