import { FormData } from "../../common/models/FormData";
export default function (template: string, substitutes: FormData): Promise<string>;
export interface templateFields {
}
export declare const genInflated: (template: string, data: templateFields, templateName?: string) => void;
export declare const genEditable: (template: string, templateName?: string) => void;
