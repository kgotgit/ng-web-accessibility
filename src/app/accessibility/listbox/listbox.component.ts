import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.parseDomIds();
    
  }


  @Input() id:string;
  @Input() type:string;
  @Input() arialabel:string;
  @Input() arialabelledby:string;
  @Input() code:string;
  @Input() label:string;
  _options:any[];
  _dropdownId:string;
  _activedescendantId:string;
  _filteredOptions:any[];
  _ddprefix:string="listbox_opt_";
  _selectedText:string=null;
  
  
  

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
    this._dropdownId="acxbox_listbox_"+this.id;
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
        option.elementId=this._ddprefix+this.id+"_"+option.code;
      });
      this._filteredOptions=[...this._options];
    }
    
  }



  /********************Event listeners************/
  optionClicked(option:any,event:any){

  }

  /********************Event Listners************/
}
