import { Component, OnInit, Input,EventEmitter, Output, OnDestroy } from '@angular/core';
import { ProgressbarModel } from 'src/app/model/progressbar.model';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit,OnDestroy {


  //constants
  private _START:string="start";
  private _STARTED:string="Started";

  private _STOP:string="stop";
  private _STOPED:string="Stopped";

  private _CLEAR:string="clear";
  private _CLEARED:string="Cleared";

  private _COMPLETED:string="Completed";

  private _SIMPLE_TYPE="simple";
  private _SIMPLE_WITH_TEXT="simpleWithText";
 

  
  constructor() { }

  ngOnInit() {
   this.listenToEvents();
   this.setFieldsFromModel();
  }
  ngOnDestroy(){
    this.progressBarEventEmitter.unsubscribe();
  }
  
  @Input("progressBarModel") model:ProgressbarModel;
  @Input("progressBarEventEmitter") progressBarEventEmitter = new EventEmitter<string>();
  @Output("fromProgressBarEmitter") fromProgressBarEmitter =new EventEmitter<string>();
  timerId:any;
  listOfHelperTexts:Array<number>;
  counterIndex:number=0;

  
  
  setFieldsFromModel(){
    if(this.model.type==this._SIMPLE_WITH_TEXT){
      this.listOfHelperTexts=new Array<number>();
      this.model.map.forEach((value:string, key:number)=>{
        this.listOfHelperTexts.push(key);
      })
    }
  }

  listenToEvents(){
    this.progressBarEventEmitter.subscribe((operation:string)=>{
      switch(operation){
        case  this._START:
        this.startProgress();
        break;
        case this._STOP:
        this.stopProgress(this._STOPED);
        break;
        case this._CLEAR:
        this.clearProgress();
        break;
        default:
        throw Error("Invalid operation provideded to the ProgressBarEvent Emitter");
      }
    });
  }

  startProgress(){
    this.timerId=setInterval(()=>{this.startTimer();},this.model.timeInSeconds * 1000);
    this.emitEvent(this._STARTED);
  }

 
 

  startTimer(){
    switch(this.model.type){
      case this._SIMPLE_WITH_TEXT:
      this.startSimpleWithTextTimer();
      break;
      default:
      this.startSimpleTimer();
    }
  }

  stopProgress(logMessage:string){
    clearInterval(this.timerId);
    this.emitEvent(logMessage);
  }
  clearProgress(){
    switch(this.model.type){
      case this._SIMPLE_WITH_TEXT:
      this.clearSimpleWithTextTimer();
      break;
      default:
      this.clearSimpleTimer();
    }
  }

  startSimpleTimer(){
    if(this.model.currentValue>=this.model.maxValue){
      this.stopProgress(this._COMPLETED);
      return;
    }
    this.model.currentValue+=this.model.incrementBy;

  }
  startSimpleWithTextTimer(){
    if(this.counterIndex>=this.listOfHelperTexts.length-1){
      this.stopProgress(this._COMPLETED);
    }
    this.model.currentValue=this.listOfHelperTexts[this.counterIndex];
    this.model.currentText=this.model.map.get(this.model.currentValue);
    this.counterIndex+=1;
  }

  clearSimpleTimer(){
    this.model.currentValue=this.model.minValue;
    this.emitEvent(this._CLEARED);
  }

  clearSimpleWithTextTimer(){
    this.model.currentValue=this.model.minValue;
    this.model.currentText="";
    this.counterIndex=0;
    this.emitEvent(this._CLEARED);

  }

  emitEvent(status:string){
    this.fromProgressBarEmitter.emit(status);
  }


  
}
