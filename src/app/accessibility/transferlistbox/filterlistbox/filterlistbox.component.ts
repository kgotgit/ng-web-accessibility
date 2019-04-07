import { Component, OnInit, Input, EventEmitter,   Output } from '@angular/core';

@Component({
  selector: 'app-filterlistbox',
  templateUrl: './filterlistbox.component.html',
  styleUrls: ['./filterlistbox.component.scss']
})
export class FilterlistboxComponent implements OnInit {

 @Input() listContent:{label:string,componentId:string,listItems:{code:string;label:string;}[]};
 @Output() onKeyWordChange = new EventEmitter<Object>();
 @Output() onSelectedItem  =new EventEmitter<Object>();
 @Output() onUnselectItem =new EventEmitter<Object>(); 
 @Input("showDelete") showDelete:boolean;
 @Output() onDeleteClicked=new EventEmitter<string>();
 search:string;
 
  
 constructor() { }

  ngOnInit() {
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
