import { Component, OnInit, Input, EventEmitter,   Output, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList,Renderer2 } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';


@Component({
  selector: 'app-filterlistbox',
  templateUrl: './filterlistbox.component.html',
  styleUrls: ['./filterlistbox.component.scss']
})
export class FilterlistboxComponent implements OnInit,AfterViewInit{
 @ViewChildren("option") options:QueryList<ElementRef>;
 @Input() listContent:{label:string,componentId:string,listItems:{code:string;label:string;}[]};
 @Output() onKeyWordChange = new EventEmitter<Object>();
 @Output() onSelectedItem  =new EventEmitter<Object>();
 @Output() onUnselectItem =new EventEmitter<Object>(); 
 @Input("showDelete") showDelete:boolean;
 @Output() onDeleteClicked=new EventEmitter<string>();
 search:string;
 activedescendentItem:string=null;
 
  
 constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
        this.options.forEach((eleRef:ElementRef)=>{
            console.log(eleRef);
        });
    }
  /**
   * Event to capture when an item is selected
   * @param $event 
   * @param item 
   */
onSelect($event, item){
    item.selected=item.selected==true?false:true;
    this.activedescendentItem=$event.currentTarget.id;
    this.updateCurrentActiveDescendant();
  }

  /**
   * This method is primarily used to update the current active descendant element so that 
   */
updateCurrentActiveDescendant(){
    this.options.forEach((eleRef:ElementRef)=>{
        if(eleRef.nativeElement.id===this.activedescendentItem){
            this.renderer.setAttribute(eleRef.nativeElement,'data-activedesendent','true');
        }else{
            this.renderer.setAttribute(eleRef.nativeElement,'data-activedesendent','false');
        }
    });
  }
/**
 * 
 * @param $event 
 */    
onKeydown($event) {
        
        if ($event.which === 40) {
            $event.preventDefault();
            if (typeof this.activedescendentItem != "undefined" && this.activedescendentItem) {
                this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                    if (eleRef.nativeElement.id === this.activedescendentItem) {
                        index = (index < optionsarray.length - 1) ? index : -1;
                        this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'false');
                        this.renderer.setAttribute(optionsarray[index + 1].nativeElement, 'data-activedesendent', 'true')
                        this.activedescendentItem = optionsarray[index + 1].nativeElement.id;
                        optionsarray[index + 1].nativeElement.scrollIntoView();
                        return true;
                    }
                });
            } else {
                this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                    if (index == 0) {
                        this.renderer.setAttribute(optionsarray[index].nativeElement, 'data-activedesendent', 'true')
                        this.activedescendentItem = optionsarray[index].nativeElement.id;
                        optionsarray[index].nativeElement.scrollIntoView();
                        return true;
                    }
                });
            }
        }else if($event.which==38){
            $event.preventDefault();
            if (typeof this.activedescendentItem != "undefined" && this.activedescendentItem) {
                this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                    if (eleRef.nativeElement.id === this.activedescendentItem) {
                        index = (index>0 && index <= optionsarray.length - 1) ? index : optionsarray.length;
                        this.renderer.setAttribute(eleRef.nativeElement, 'data-activedesendent', 'false');
                        this.renderer.setAttribute(optionsarray[index - 1].nativeElement, 'data-activedesendent', 'true')
                        this.activedescendentItem = optionsarray[index - 1].nativeElement.id;
                        optionsarray[index - 1].nativeElement.scrollIntoView();
                        return true;
                    }
                });
            } else {
                this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
                        this.renderer.setAttribute(optionsarray[optionsarray.length-1].nativeElement, 'data-activedesendent', 'true')
                        this.activedescendentItem = optionsarray[optionsarray.length-1].nativeElement.id;
                        optionsarray[optionsarray.length-1].nativeElement.scrollIntoView();
                        return true;
                });
            }
        }
    }

}
 

    
 /* onKeyUp($event){
     this.onKeyWordChange.emit(this.search);
 }
 onCheckboxChange(item,$event){
 	var itemChecked=$event.currentTarget.checked;
 	if(itemChecked){
    	this.onSelectedItem.emit({"componentId":this.listContent.componentId,"item": item});
 	}else{
 		this.onUnselectItem.emit({"componentId":this.listContent.componentId,"item":item});
 	
 	}
 }
    onDelete($event){
      
        this.onDeleteClicked.emit(this.listContent.componentId);
    } */
 



