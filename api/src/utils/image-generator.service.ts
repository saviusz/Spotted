/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { genInflated, templateFields } from 'html-generator';
import { renderHTML } from 'imagerenderer';
import { readFile } from 'node:fs/promises';
import { cwd } from 'node:process';

@Injectable()
export class ImageGeneratorService {
  async generate(data: templateFields) {
    const template = await readFile(cwd() + '/assets/templates/base.html', {
      encoding: 'utf8',
    });
    const html = genInflated(template, data);
    return renderHTML(html, { darkMode: true });
  }
}
