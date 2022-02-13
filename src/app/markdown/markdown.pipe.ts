import {Pipe, PipeTransform} from '@angular/core';
import md from 'markdown-it';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
  private static markdownRenderer = md();

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string') {
      return MarkdownPipe.markdownRenderer.render(value);
    }
    return value;
  }
}
