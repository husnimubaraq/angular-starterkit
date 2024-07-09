import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { unescape } from 'lodash'
import slugify from "slugify"

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

@Pipe({
  name: 'slugify',
  standalone: true
})
export class Slugify implements PipeTransform {

  transform(value: string): string {
    return slugify(value, {
      lower: true
    })
  }

}
