interface IReplaceParenthesisOpt {
    leftParenthesis: string;
    rightParenthesis: string;
}
export declare function replaceParenthesis(input: string, replaceFunct: (match: string) => string, options?: IReplaceParenthesisOpt): string;
export declare function standardFormat(input: string): string;
export {};
