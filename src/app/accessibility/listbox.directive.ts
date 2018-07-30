import { Directive, ElementRef, HostBinding, HostListener, AfterViewInit, ViewChildren, QueryList, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appListbox]'
})
export class ListboxDirective implements AfterContentInit {

  constructor(el: ElementRef) {}
  @HostBinding('attr.listbox-type') listtype='single';
  @ViewChildren('li') listItems:QueryList<any>;
  

  ngAfterContentInit(){
    console.log(this.listItems);
  }  

  @HostListener('keydown',['$event'])
  onkeydown(event:KeyboardEvent):void{
      console.log(event.which);
  }

}
