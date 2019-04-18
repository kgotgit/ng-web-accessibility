import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input("srOnly") srOnly:boolean=false;
  @Input("alertClass") alertClass:string;
  @Input("alertMessage") message:string;
  @Input("alertAriaLive") alertAriaLive:string;

  constructor() { }

  ngOnInit() {
  }

}
