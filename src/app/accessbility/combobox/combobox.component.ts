import { Component, OnInit,HostBinding,Input,Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})
export class ComboboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.parseDomIds();
  }

  
  @Input() id:string;
  @Input() type:string;
  @Input() arialabel:string;
  @Input() code:string;
  @Input() label:string;
  @Input() options:any[];

  _dropdownId:string;
  _activedescendantId:string;
  
  
  parseDomIds(){
    this._dropdownId="accessCombobox_dropdown_ul_"+this.id;
  }


  getCode(option:any){
    let optionCode=null;
    if(option!=null){
      console.log("inside getCode");
      console.log(option);
      optionCode=option[this.code];
    }
    return optionCode;
  }

  getLabel(option:any){
    let textLabel=null;
    if(option!=null){
      textLabel=option[this.label];
    }
    return textLabel;
  }
}
