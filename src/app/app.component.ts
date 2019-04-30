import { Component } from '@angular/core';
import { CommonService } from './core/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-web-accessibility';
  commonServiceSubscribe:Subscription
  constructor(private commonService:CommonService){
    this.SubscribesToEvents();
  }
  isFullView=true;
  options=[
    {"code":"1","label":"Yellow"},
    {"code":"2","label":"Blue"},
    {"code":"3","label":"Green"},
    {"code":"4","label":"Black"},
    {"code":"5","label":"Red"},
    {"code":"6","label":"Purple"},
    {"code":"7","label":"Pink"},
  ]


  SubscribesToEvents() {
    this.commonServiceSubscribe=this.commonService.isToggleLeftNav().subscribe((showSideNav:boolean)=>{
      this.isFullView=!showSideNav;
    });
  }
}
