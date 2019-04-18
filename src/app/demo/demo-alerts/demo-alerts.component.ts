import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-alerts',
  templateUrl: './demo-alerts.component.html',
  styleUrls: ['./demo-alerts.component.scss']
})
export class DemoAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


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




}
