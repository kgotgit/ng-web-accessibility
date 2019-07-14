import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TreeModel } from 'src/app/model/tree.model';
import { LiEleComponent } from '../common/li-ele/li-ele.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit,AfterViewInit {

  @Input("treeModel") model: TreeModel;
  @ViewChildren("options") options:QueryList<LiEleComponent>;
  TREEVIEW_SUFFIX: string = "_treeView";
  ARIA_EXPANDED: string = "aria-expanded";


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.options);
  }


  getTreeItemId(item: any, treeId: string) {
    return item[this.model.cid] + "_" + treeId + this.TREEVIEW_SUFFIX;
  }

  collapsedState(item: any) {
    if (item != null && item.children != null && item.children.length > 0) {
      return "false"
    }
    return null;
  }

  getExpandCollapseClass(item: any) {

    if (item != null && item.children != null && item.children.length > 0) {
      return "fa fa-plus-square";
    }
    return "fa fa-square-o";
  }

  isChildrenExists(items: any[]) {
    return (items != null && items.length > 0) ? true : false;
  }

  toggleExpansion( wrapperItem: any) {
    if(wrapperItem==null){
      return false;
    }
    let item=wrapperItem["item"];
    let $event=wrapperItem["$event"];
    this.options.some((liEleComp: LiEleComponent, index: number, optionsarray: LiEleComponent[]) => {
      if (liEleComp.dataCode == item[this.model.cid]) {
        liEleComp.ariaExpanded=( liEleComp.ariaExpanded == "true") ? "false" : "true";
       return true;
      }
    });

  }

  getChildCount(item: any) {
    if (item != null && item[this.model.cnid] != null) {
      let items = item[this.model.cnid];
      return (Array.isArray(items) ? items.length : 0)
    }
    return "0";
  }
}
