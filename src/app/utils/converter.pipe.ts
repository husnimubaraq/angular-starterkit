import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { unescape } from 'lodash'

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(unescape(value))
  }

}
