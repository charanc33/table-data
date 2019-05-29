import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) { 
  this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '#ded5d5');
}

  

}
