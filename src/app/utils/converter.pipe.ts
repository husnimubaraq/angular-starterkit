import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, Pipe, PipeTransform, Type, ViewContainerRef } from '@angular/core';
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

@Pipe({
  name: 'componentToString',
  standalone: true
})
@Injectable({
  providedIn: 'root',
})
export class ComponentToStringPipe implements PipeTransform {

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private sanitizer: DomSanitizer
  ) {}

  transform(component: Type<any>): SafeHtml {
    const container = document.createElement('div');
    const componentRef = this.createComponent(component, container);
    const html = container.innerHTML;
    this.destroyComponent(componentRef);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private createComponent(component: Type<any>, container: HTMLElement): ComponentRef<any> {
    const viewContainerRef = this.injector.get(ViewContainerRef, null);
    if (!viewContainerRef) {
      throw new Error('ViewContainerRef not found. Ensure you are using this pipe in a view context.');
    }

    const componentRef = viewContainerRef.createComponent(component, {
      index: viewContainerRef.length,
      injector: this.injector
    });
    container.appendChild(componentRef.location.nativeElement);
    return componentRef;
  }

  private destroyComponent(componentRef: ComponentRef<any>) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
