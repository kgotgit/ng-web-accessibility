import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { TreeModel } from 'src/app/model/tree.model';
import { AlertsComponent } from '../alerts/alerts.component';
import { Options } from 'selenium-webdriver/ie';
import { LiEleComponent } from '../common/li-ele/li-ele.component';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit,AfterViewInit {
  @ViewChildren("options") options: QueryList<ElementRef>;
  @ViewChildren("ultags") ulTags:QueryList<ElementRef>;
  eleMap:Map<string,ElementRef>;
  @Input("treeModel") model:TreeModel;

  TREEVIEW_SUFFIX:string="_treeView";

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    this.createInitMap();
    console.log(this.options);
    console.log(this.ulTags);
  }

  createInitMap(){
    this.eleMap=new Map<string,ElementRef>();
    this.options.forEach((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
      this.eleMap.set(eleRef.nativeElement.id, eleRef);
  });
  }
  setTabIndexOnLoad(role:string,i:number){
    return (role=='tree' && i==0)?"0":"-1";
  }

  toggleSelection($event:any,item:any){
  
    this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
      let code=eleRef.nativeElement.getAttribute("data-code")
      if(code==item[this.model.cid]){
        let isExpanded=eleRef.nativeElement.getAttribute("aria-expanded");
        this.renderer.setAttribute(eleRef.nativeElement, "aria-expanded",(isExpanded=="true")?"false":"true");
        return true;
      }
  });
  
  }

  getExpandCollapseClass(item:any){

    if(item!=null && item.children!=null && item.children.length>0){
      return "fa fa-plus-square";
    }
    return "fa fa-square-o";
  }

  isChildrenExists(items:any[]){
    return (items!=null && items.length>0)?true:false;
  }

  collapsedState(item:any){
    if(item!=null && item.children!=null && item.children.length>0){
      return "false"
    }
    return null;

  }

  executeKeydown($event){
    let keyCode=$event.which;

    switch(keyCode){
      case 40://Down Arrow
                this.executeArrowDown($event);
                break;

            case 38:// Up Arrow
                this.executeUpArrow($event);
                break;
            case 37:// RightArrow
                this.executeLeftArrow($event);
                break;

            case 39:// RightArrow
                this.executeRightArrow($event);
                break;
            case 32:// Spacebar
                this.selectOption($event);
                break;




    }
    
  }

  toggleExpand(eleRef: ElementRef,state:string){
    let isExpanded=eleRef.nativeElement.getAttribute("aria-expanded");
    this.renderer.setAttribute(eleRef.nativeElement, "aria-expanded",state);
  }

  setElementAttribute(eleRef: ElementRef,attribute:string,value:string){
    this.renderer.setAttribute(eleRef.nativeElement, attribute,value);
  }
  executeRightArrow($event){
    let nodeId=$event.currentTarget.id;
    this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
      if(nodeId==eleRef.nativeElement.id){
      
        this.toggleExpand(eleRef,"true");
        return true;
      }
  });
}

executeLeftArrow($event){
  let nodeId=$event.currentTarget.id;
  this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
    if(nodeId==eleRef.nativeElement.id){
      this.toggleExpand(eleRef,"false");
      return true;
    }
});
}

  executeArrowDown($event){
    let nodeId=$event.currentTarget.id;
    console.log($event);      
    this.options.some((eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
      if(nodeId==eleRef.nativeElement.id){
        console.log(eleRef);
        console.log(eleRef.nativeElement.children);
       // check if child items exists and is expanded
       // if expaneded get the first li item and set the focus
       let isExpanded=eleRef.nativeElement.getAttribute("aria-expanded");
       if(isExpanded=="true"){
        let nearestUL=eleRef.nativeElement.querySelector("ul");
        let liTagId=nearestUL.querySelector("li")[0].id;
        if(this.eleMap.get(liTagId)){
          let nextElementRef=this.eleMap.get(liTagId);
          this.setElementAttribute(eleRef,"tabindex","-1");
          this.setElementAttribute(nextElementRef,"tabindex","0");
        }
       }else{
        this.setElementAttribute(eleRef,"tabindex","-1");
        this.setElementAttribute(optionsarray[index+1],"tabindex","0");
      }
        return true;
      }
  });

  }

  executeUpArrow($event){

  }

  selectOption($event){

  }

  getTreeItemId(item:any,treeId:string){
    return item[this.model.cid]+"_"+treeId+this.TREEVIEW_SUFFIX;
  }


  filterElementRef(nodeId:string){

  }

  
  

}