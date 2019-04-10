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
  onKeydown($event){
      $event.preventDefault();
      if($event.which===40){
        if(this.activedescendentItem==null ){
            this.options.forEach((eleRef:ElementRef)=>{
                if(eleRef.nativeElement.id===this.activedescendentItem){
                    let currentIndex=eleRef.nativeElement.getAttribute("data-index");
                    let nextIndex=currentIndex<this.options.length-1?currentIndex+1:0;
                    
                    this.renderer.setAttribute(this.options[nextIndex],'data-activedesendent','true');
                }else{
                    this.renderer.setAttribute(eleRef.nativeElement,'data-activedesendent','false');
                }
            });
        }  
        console.log('down');
      }
  }


    
 onKeyUp($event){
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
    }
 



}
