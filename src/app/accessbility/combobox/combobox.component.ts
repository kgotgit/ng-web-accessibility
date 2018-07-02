import { Component, OnInit,HostBinding,Input,Output,QueryList,ViewChildren, ElementRef } from '@angular/core';
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
    this.generateLocalData();
  }

  
  @Input() id:string;
  @Input() type:string;
  @Input() arialabel:string;
  @Input() code:string;
  @Input() label:string;
  private _options:any[];
  @ViewChildren("optionTpl") optionsDom: QueryList<ElementRef>;



  _dropdownId:string;
  _activedescendantId:string;
  _filteredOptions:any[];
  _ddOpen:boolean=false;
  _ddprefix:string="accessCombobox_option_";
  _selectedText:string=null;
  _hideCloseBtn:boolean=true;
  _hideToggleBtn:boolean=false;
  _isReadOnly:boolean=false;

  @Input() set options(options:any[]){
    this._options=options;
    this.generateLocalData();
  }
  
  parseDomIds(){
    this._dropdownId="accessCombobox_dropdown_ul_"+this.id;
  }
  generateLocalData(){
    if(this._options!=null && this._options.length>0){
      this._options.forEach((option,idx)=>{
        option.code=option[this.code];
        option.label=option[this.label];
        option.selected=false;
        option.activedescendant=false;
        option.elementId=this._ddprefix+"_"+this.id+"_"+option.code;
      });
      this._filteredOptions=[...this._options];
    }
    
  }
  toggleList(){
    if(this._isReadOnly===true){
      return false;
    }

      if(this._ddOpen===true){
        this._ddOpen=false;
      }else{
        this._ddOpen=true;
      }
  }

  getCode(option:any){
    let optionCode=null;
    if(option!=null){
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

  filterOptions(selVal){
    this._filteredOptions=this.options.filter(r => {
      let optionText=this.getLabel(r);
      if (optionText.toLowerCase().indexOf(selVal.toLowerCase())===0) {
          return true;
      } else {
          return false;
      }
  });
  }

  /**
   * Updates aria-selected to false
   */
  clearSelection(){
    this._filteredOptions.forEach((option,idx)=>{
      option.selected=false;
      option.activedescendant=false;
    });
  }
  /***********Event LIsteners**************/

  onComboboxClick(event:any){
      this.toggleList();
  }

  onKeydown(event:any){
   // console.log("keydown");
  }
  onKeyup(event:any){
    var selVal=event.target.value;
    this.filterOptions(selVal);
  }

  optionClicked(option:any){
    option.selected=true;
    this._activedescendantId=option.elementId;
    this._selectedText=option.label;
    this.toggleList();
    this._hideCloseBtn=false;
    this._hideToggleBtn=true;
    this._isReadOnly=true;
  }
  /**
   * On click of the clear icon will 
   * 1. removes' readonly attribute for the input
   * 2. Clears the input value 
   * 3. sets the active descendent to the first option
   * 4. clear all selected options 
   */
  onClearClick(event:any){
    this.clearSelection();
    this.toggleList();
    this._hideCloseBtn=true;
    this._hideToggleBtn=false;
    this._isReadOnly=false;
    this._selectedText=null;
  }


}
