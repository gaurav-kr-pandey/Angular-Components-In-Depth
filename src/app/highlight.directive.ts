import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') size:string='35px';
  constructor(private element:ElementRef) { }
  

  @HostListener('mouseenter') addElement(){
    this.element.nativeElement.style.fontSize=this.size;
  }

  @HostListener('mouseleave') removeElement(){
    this.element.nativeElement.style.fontSize=null;
  }

}
