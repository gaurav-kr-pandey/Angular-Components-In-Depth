import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color:string='yellow';
  constructor(private element:ElementRef) { }
  

  @HostListener('mouseenter') addElement(){
    this.element.nativeElement.style.backgroundColor=this.color;
  }

  @HostListener('mouseleave') removeElement(){
    this.element.nativeElement.style.backgroundColor=null;
  }

}
