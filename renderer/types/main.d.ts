interface IOutputOptions {
    width?: number;
    height?: number;
    darkMode: boolean;
}
export declare const renderHTML: (renderString: string, options: IOutputOptions) => Promise<string>;
export {};
