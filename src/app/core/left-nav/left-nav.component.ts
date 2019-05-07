import { Component, OnInit } from '@angular/core';
import { NavModel } from 'src/app/model/nav.model';
import { CommonService } from '../services/common.service';
import { Subscription} from 'rxjs';



@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  navs:NavModel[];
  commonServiceSubscribe:Subscription;
  showSideNav:boolean=true;
  constructor(private commonService:CommonService) { }
  
  ngOnInit() {
    this.buildNavModels();
    this.SubscribesToEvents();
  }
  SubscribesToEvents() {
    this.commonServiceSubscribe=this.commonService.isToggleLeftNav().subscribe((showSideNav:boolean)=>{
      this.showSideNav=showSideNav;
    });
  }
 

  buildNavModels(){
  this.navs=new Array();
  this.navs.push(new NavModel("/combobox","Combobox"));
  this.navs.push(new NavModel("/transferlist","Transfer List"));
  this.navs.push(new NavModel("/alerts","Alerts"));
  this.navs.push(new NavModel("/progressbars","Progress Bar"));
  this.navs.push(new NavModel("/treeview","Tree View"));
  this.navs.push(new NavModel("/listgroup","List Group"));
  this.navs.push(new NavModel("/modalwindow","Modal Window"));
  this.navs.push(new NavModel("/tabs","Nav Tabs"));
  this.navs.push(new NavModel("/tables","Table"));
 

  }


}
