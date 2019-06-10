import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-li-ele',
  templateUrl: './li-ele.component.html',
  styleUrls: ['./li-ele.component.scss']
})
export class LiEleComponent implements OnInit {


  @Input("id") id:string;
  @Input("itemObj") itemObj:any;
  @Input("modelObj") modelObj:any;
  @Input("dataCode") dataCode:string;
  @Input("tabindex") tabindex:string;
  @Input("role") role:string;
  @Input("ariaExpanded") ariaExpanded:string;
  @Input("iconClass") iconClass:string;
  @Output("onkeydown") onkeydown = new EventEmitter<any>();
  @Output("onclick") onclick = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }


  executeKeyDown($event:any){
    console.log($event);
  }

  toggleSelection($event:any){
    console.log($event);
  }

  getIconClass(){
    return this.iconClass;
  }

}
