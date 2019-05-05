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
  }
  ngOnDestroy(){
    this.progressBarEventEmitter.unsubscribe();
  }
  
  @Input("progressBarModel") model:ProgressbarModel;
  @Input("progressBarEventEmitter") progressBarEventEmitter = new EventEmitter<string>();
  @Output("fromProgressBarEmitter") fromProgressBarEmitter =new EventEmitter<string>();
  timerId:any;

  
  

  listenToEvents(){
    this.progressBarEventEmitter.subscribe((operation:string)=>{
      switch(operation){
        case  this._START:
        this.startProgress();
        break;
        case this._STOP:
        this.stopProgress();
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

  stopProgress(){
    clearInterval(this.timerId);
    this.emitEvent(this._STOPED);
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
      this.stopProgress();
      this.emitEvent(this._COMPLETED);
      return;
    }
    this.model.currentValue+=this.model.incrementBy;

  }
  startSimpleWithTextTimer(){


  }

  clearSimpleTimer(){
    this.model.currentValue=this.model.minValue;
    this.emitEvent(this._CLEARED);
  }

  clearSimpleWithTextTimer(){

  }

  emitEvent(status:string){
    this.fromProgressBarEmitter.emit(status);
  }


  
}
