import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeHtmlPipe } from "utils";

@Component({
    selector: 'icon',
    standalone: true,
    templateUrl: './icon.component.html',
    imports: [SafeHtmlPipe]
})
export class IconComponent implements OnInit {
  @Input() iconName!: string;
  svgContent!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSvg();
  }

  loadSvg() {
    const url = `assets/icons/${this.iconName}.svg`;
    this.http.get(url, { responseType: 'text' }).subscribe(
      data => {
        this.svgContent = data;
      },
      error => {
        console.error('Could not load SVG:', error);
      }
    );
  }
}
