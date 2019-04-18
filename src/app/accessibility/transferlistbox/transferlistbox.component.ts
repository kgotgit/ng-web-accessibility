import { Component, OnInit, Input, Output } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-transferlistbox',
  templateUrl: './transferlistbox.component.html',
  styleUrls: ['./transferlistbox.component.scss']
})
export class TransferlistboxComponent implements OnInit {

  @Input("leftAreaList") leftAreaList: any[];
  @Input("rightAreaList") rightAreaList: any[];
  @Input("code") code: string;
  @Input("label") label: string;
  @Input("leftAreaLabel") leftAreaLabel: string;
  @Input("rightAreaLabel") rightAreaLabel: string;
  @Input("leftAreaId") leftAreaId: string;
  @Input("rightAreaId") rightAreaId: string;

  leftAreaMap: Map<string, any>;
  rightAreaMap: Map<string, any>=new Map<string,any>();

  showDelete: boolean = true;
  constructor() { }

  /**
   * 
   */
  ngOnInit() {
    this.generateLocalData();


  }

  /**
   * 
   */
  generateLocalData() {
    if (this.code == null) { throw Error("code attribute is required") };
    if (this.label == null) { throw Error("label attribute is required") };
    if (this.leftAreaList == null) { throw Error("leftAreaList attribute is required") };
    this.leftAreaMap = new Map<string, any>();
    this.leftAreaList.forEach((item) => {
      item.selected = false;
      this.leftAreaMap.set(item[this.code], item);
    });
  }
  /**
   * 
   * @param wrapperItem 
   */
  itemSelectedOrUnSelected(wrapperItem: any) {
    if (wrapperItem == null) {
      return;
    }
    let item = wrapperItem.item;
    switch (wrapperItem.componentId) {
      case this.leftAreaId:
        this.leftAreaMap.set(item.key, item.value);
        break;
      case this.rightAreaId:
        this.rightAreaMap.set(item.key, item.value);
        break;
      default:
        return;
    }
  }


  toggleLeftToRight(){
    this.leftAreaMap.forEach((item:any,key:string)=>{
      if(item.selected==true){
        item.selected=false;
        this.rightAreaMap.set(key,item);
        this.leftAreaMap.delete(key);
      }
    });

  }

  toggleRightToLeft(){
    this.rightAreaMap.forEach((item:any,key:string)=>{
      if(item.selected==true){
        item.selected=false;
        this.leftAreaMap.set(key,item);
        this.rightAreaMap.delete(key);
      }
    });
  }

}
