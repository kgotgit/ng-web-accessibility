import { Component, OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { DynaLoaderService } from '../../core/services/dyna-loader.service';
import { AlertsComponent } from '../../accessibility/alerts/alerts.component';

@Component({
  selector: 'app-demo-alerts',
  templateUrl: './demo-alerts.component.html',
  styleUrls: ['./demo-alerts.component.scss']
})
export class DemoAlertsComponent implements OnInit {
  @ViewChild('alerts', {read: ViewContainerRef}) 
  alertsViewContainerRef:ViewContainerRef;
  typedMessage:string;

   /**
   *alerts component params 
   */
  isSrOnly:boolean=false;
  message:string="";
  ariaLive:string="polite";
  alertsClass="primary";
  alertAriaLive:string="polite";
/**
   *end of alerts component params 
   */
  constructor(private dynaLoadService:DynaLoaderService) { }

  ngOnInit() {
    this.dynaLoadService.setRootViewContainerRef(this.alertsViewContainerRef);
  }

  addAlerts(){
    let dynaComp=this.dynaLoadService.createDynaComponentInstance(AlertsComponent);
    if(dynaComp!=null){
      (<AlertsComponent>dynaComp.instance).srOnly=false;
      (<AlertsComponent>dynaComp.instance).alertClass="primary";
      (<AlertsComponent>dynaComp.instance).message=this.message;
      (<AlertsComponent>dynaComp.instance).alertAriaLive="polite";
      this.dynaLoadService.insertDynaComponent(dynaComp);
    }
  }

}
