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
  private _dropdownId:string;
  private _activedescendantId:string;
  private _filteredOptions:any[];
  private _ddOpen:boolean=false;
  private _ddprefix:string="accessCombobox_option_";
  private _selectedText:string=null;
  private _hideCloseBtn:boolean=true;
  private _hideToggleBtn:boolean=false;
  private _isReadOnly:boolean=false;

  /**
   * This method gets invoked anytime input options 
   * are updated from the parent component.
   * Sets values to _options
   */
  @Input() set options(options:any[]){
    this._options=options;
    this.generateLocalData();
  }
  /**
   * creates a unique dom id by using id attribute defined for the component
   */
  parseDomIds(){
    this._dropdownId="accessCombobox_dropdown_ul_"+this.id;
  }
  /**
   * parses the input object to add component required params to the input data options
   */
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
  /**
   * Toggles the dropdown ul list (open/close)
   */
  toggleList(){
    if(this._isReadOnly===true){
      return false;
    }

      if(this._ddOpen===true){
        this._ddOpen=false;
      }else{
        this.openComobobox();
      }
  }
  /**
   * Opens the dropdown ul ans sets the active descendant option
   */
  openComobobox(){
    this._ddOpen=true;
    let idx=this.getActiveDescendant();
    this.setActiveDescendant(idx);
  }
/**
 * To get the code from option object
 * @param option 
 */
  getCode(option:any){
    let optionCode=null;
    if(option!=null){
      optionCode=option[this.code];
    }
    return optionCode;
  }
/**
 * 
 * @param option 
 * To get label value from option object
 */
  getLabel(option:any){
    let textLabel=null;
    if(option!=null){
      textLabel=option[this.label];
    }
    return textLabel;
  }
/**
 * FIlter dropdown based on the input value trigger on keyup
 * @param selVal 
 */
  filterOptions(selVal){
    this._filteredOptions=this._options.filter(r => {
      let optionText=this.getLabel(r);
      if (optionText.toLowerCase().indexOf(selVal.toLowerCase())===0) {
          return true;
      } else {
          return false;
      }
  });
  }
  /**
   * to get the current active descendant with default being zeroth element.
   */
  getActiveDescendant(){
      let defaultIdx=0;
      this._filteredOptions.forEach((option,idx)=>{
            if(option.activedescendant===true){
              defaultIdx=idx;
              return false;
            }
      });
      return defaultIdx;
  }
  /**
   * To set active descendant element
   * @param idx 
   */
  setActiveDescendant(idx){
      if(idx<=this._filteredOptions.length-1){
        this._filteredOptions[idx].activedescendant=true;
      }
  }
 /**
  * to set next  element as  active descendant
  */
  setNextActiveDescendant(){
      let activedescIdx=this.getActiveDescendant();
      let optionsSize=this._filteredOptions.length-1;
      if(activedescIdx<=optionsSize){
        this._filteredOptions[activedescIdx].activedescendant=false;
        let nextOptionIdx=(activedescIdx==optionsSize)?0:activedescIdx+1;
        this._filteredOptions[nextOptionIdx].activedescendant=true;
        this._activedescendantId= this._filteredOptions[nextOptionIdx].elementId;
      }


  }
  /**
   * To set previous element as the  active descendent element
   */
  setPreviousActiveDescendant(){
    let activedescIdx=this.getActiveDescendant();
    let optionsSize=this._filteredOptions.length-1;
    if(activedescIdx<=optionsSize){
      this._filteredOptions[activedescIdx].activedescendant=false;
      let prevOptionIdx=(activedescIdx==0)?optionsSize:activedescIdx-1;
      this._filteredOptions[prevOptionIdx].activedescendant=true;
      this._activedescendantId= this._filteredOptions[prevOptionIdx].elementId;
    }
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
  /**
   * To select current active descendant element as the selected value
   */
  selectOption(){
      let activeIndex=this.getActiveDescendant();
      this.optionClicked(this._filteredOptions[activeIndex]);
  }
  /***********Event LIsteners**************/
  /**
   * To toggle between open/close dropdown ul list
   */
  onComboboxClick(event:any){
      this.toggleList();
  }
 /**
  * To enable keyboard navigation
  * @param event 
  */
  onKeydown(event:any){
    let keyCode=event.which;
    let shiftKey=event.shiftKey;
      switch(keyCode){

          case 40:
          this.setNextActiveDescendant();
          break;
          case 38:
          this.setPreviousActiveDescendant();
          break;
          case 13:
          this.selectOption();
          break;
          case 32:
          if(shiftKey==true){
            this._ddOpen=true;
            event.preventDefault();
          }
          
          break;
          case 27:
          this._ddOpen=false;





      }
  }
  /**
   * Triggers filter options method on keyup when focus in the input element.
   * @param event 
   */
  onKeyup(event:any){
    var selVal=event.target.value;
    this.filterOptions(selVal);
  }
/**
 * Triggers on click and selects the option and sets the text in the input.
 * @param option 
 */
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
    this._filteredOptions=[...this._options];
  }
  /**
   * To open dropdown ul tag on click of toggle down button
   * @param event 
   */
  onToggleClick(event:any){
    if(this._isReadOnly==false){
     this.openComobobox();
    }
  }
  /**
   * To close dropdown on focus out from the combobox.
   * @param event 
   */
  onComoboxFocusOut(event:any){
    this._ddOpen=false;
    event.preventDefault();
    event.stopPropogation();
  }


}
