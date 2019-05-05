import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ProgressbarModel } from 'src/app/model/progressbar.model';

@Component({
  selector: 'app-demo-progressbars',
  templateUrl: './demo-progressbars.component.html',
  styleUrls: ['./demo-progressbars.component.scss']
})
export class DemoProgressbarsComponent implements OnInit,OnDestroy {
  
  
  ;
  //Exmaple 1
  defaultProgressBar:ProgressbarModel;
  exeOneStartProgressClicked=new EventEmitter<string>();
  exeOneEventFromProgressBar=new EventEmitter<string>();
  exeOnelogs:Array<string>=new Array<string>();
  //Example 2
  progressBarWithText:ProgressbarModel
  exeTwoStartProgressClicked=new EventEmitter<string>();
  exeTwoEventFromProgressBar=new EventEmitter<string>();
  exeTwologs:Array<string>=new Array<string>();


  constructor() { }

  ngOnInit() {
    this.initiateProgressBarModels();
    this.listenToEvents();
  }

  ngOnDestroy(){
    this.exeOneEventFromProgressBar.unsubscribe();
    this.exeOneEventFromProgressBar.unsubscribe();

    this.exeTwoStartProgressClicked.unsubscribe();
    this.exeTwoEventFromProgressBar.unsubscribe();
  }
  

  initiateProgressBarModels(){
    this.defaultProgressBar=new ProgressbarModel();
    this.progressBarWithText=new ProgressbarModel(0,0,100,true,this.getSampleTextMap(),10,3,"progress-bar-striped progress-bar-animated",'simpleWithText')
  }
  
  
  getSampleTextMap(){
       let aMap:Map<number,string>=new Map<number,string>();
       aMap.set(10,"Setting up Environment");
       aMap.set(20,"Copying test scenario files");
       aMap.set(30,"Executing test scenarios");
       aMap.set (80,"Generating test results report");
       aMap.set(100,"Completed automation test");
       return aMap;
    
  }

  eventFromExeOneProgressBar(data:string){
    this.exeOnelogs.push(data);
  }
  emitProgressBarEvent(operation:string,example:string){
    switch(example){
      case "1":
      this.exeOneStartProgressClicked.emit(operation);
      break;
      case "2":
      this.exeTwoEventFromProgressBar.emit(operation);
      break;
    }
    
  }

 

  listenToEvents(){
  

    this.exeTwoEventFromProgressBar.subscribe((data:string)=>{
      this.exeTwologs.push(data);
    });
  }




  /* stepIncrement=0;
  timeoutId:any;
  ariaValueNow:string="0";
  ariaValueMin:string="0";
  ariaValueMax:string="100";
  progressStyle:string="progress-bar-striped progress-bar-animated"
  inLineStyle:string="0";


  startProgress(){

    this.timeoutId=setInterval(()=>{this.updateProgress()},500);
  }

  updateProgress(){
    this.stepIncrement+=5;
    this.ariaValueNow=this.stepIncrement+"";
    this.inLineStyle=this.ariaValueNow;
    if(this.stepIncrement>=Number(this.ariaValueMax)){
      clearInterval(this.timeoutId);
    }
  }

  stopProgress(){
    clearInterval(this.timeoutId);
  }

  clear(){
    this.ariaValueNow="0";
    this.ariaValueMin="0";
    this.ariaValueMax="100";
    this.progressStyle="progress-bar-striped progress-bar-animated"
    this.inLineStyle="0";
    this.stepIncrement=0;

  } */
}
