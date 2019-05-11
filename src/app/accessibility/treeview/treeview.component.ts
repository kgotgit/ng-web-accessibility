import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import { TreeModel } from 'src/app/model/tree.model';
import { AlertsComponent } from '../alerts/alerts.component';
import { Options } from 'selenium-webdriver/ie';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit,AfterViewInit {
  @ViewChildren("options") options: QueryList<ElementRef>;
  @Input("treeModel") model:TreeModel;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    console.log(this.options);
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
        console.log(code);
        return true;
      }
  });
  
  }
  

}
