/// <reference types="node" />
import { FormData } from '../../common/models/FormData';
interface IOutputOptions {
    width?: number;
    height?: number;
    darkMode: false;
}
export default function (template: string, substitutes: FormData, options: IOutputOptions): Promise<string | Buffer>;
export {};
