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
  _dropdownId:string;
  _activedescendantId:string;
  faCoffee=faCoffee;
  
  parseDomIds(){
    this._dropdownId="accessCombobox_dropdown_ul_"+this.id;
  }
}
