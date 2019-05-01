import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-progressbars',
  templateUrl: './demo-progressbars.component.html',
  styleUrls: ['./demo-progressbars.component.scss']
})
export class DemoProgressbarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stepIncrement=0;
  timeoutId:any;
  ariaValueNow:string="0";
  ariaValueMin:string="0";
  ariaValueMax:string="100";
  progressStyle:string="progress-bar-striped progress-bar-animated"
  inLineStyle:string="0";


  startProgress(){

    this.timeoutId=setInterval(()=>{this.updateProgress()},2000);
  }

  updateProgress(){
    this.stepIncrement+=25;
    this.ariaValueNow=this.stepIncrement+"";
    this.inLineStyle=this.ariaValueNow;
    if(this.stepIncrement>=Number(this.ariaValueMax)){
      clearInterval(this.timeoutId);
    }
  }
}
