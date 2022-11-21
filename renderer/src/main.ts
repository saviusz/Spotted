import puppeteer from "puppeteer";
import { minimal_args } from "./utils";

const browser = puppeteer.launch({ args: minimal_args });

interface IOutputOptions {
  width?: number;
  height?: number;
  darkMode: boolean;
}

export const renderHTML = async (
  renderString: string,
  options: IOutputOptions
) => {
  const page = await (await browser).newPage();

  await page.setViewport({
    width: options.width ?? options.height ?? 1080,
    height: options.height ?? options.width ?? 1080,
  });

  await page.emulateMediaFeatures([
    {
      name: "prefers-color-scheme",
      value: options.darkMode ? "dark" : "light",
    },
  ]);

  await page.goto(`data:text/html,${encodeURIComponent(renderString)}`);
  await page.evaluate(() => {
    const sel = document.querySelector("template");
    document.body.innerHTML = sel?.innerHTML || "";
  });

  return (await page.screenshot({
    captureBeyondViewport: false,
    type: "jpeg",
    quality: 100,
    encoding: "base64",
  })) as string;
};
