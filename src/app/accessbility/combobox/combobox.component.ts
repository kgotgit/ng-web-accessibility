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
  }

  
  @Input() id:string;
  @Input() type:string;
  @Input() arialabel:string;
  @Input() code:string;
  @Input() label:string;
  @Input() options:any[];
  @ViewChildren("optionTpl") optionsDom: QueryList<ElementRef>;



  _dropdownId:string;
  _activedescendantId:string;
  _filteredOptions:any[];
  _ddOpen:boolean=false;
  _selectedText:string=null;
  
  parseDomIds(){
    this._dropdownId="accessCombobox_dropdown_ul_"+this.id;
  }
  toggleList(){
    console.log("inside toggle list");
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
    let code=this.getCode(option);
    if(code!=null && code.trim()!=""){
      this._activedescendantId="accessCombobox_option_"+this.id+code;
    }else{
      this._activedescendantId=null;
    }
    this.optionsDom.forEach((item,idx)=>{
      let elementId=item.nativeElement.id;
      let itemElemId="accessCombobox_option_"+this.id+"_"+code;
      if(elementId===itemElemId){
        item.nativeElement.setAttribute("aria-selected",true);
        this._selectedText=this.getLabel(option);
      }else{
        item.nativeElement.setAttribute("aria-selected",false);
      }
     this.toggleList();
    }); 
  }

}
