import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferlistbox',
  templateUrl: './transferlistbox.component.html',
  styleUrls: ['./transferlistbox.component.scss']
})
export class TransferlistboxComponent implements OnInit {

  showDelete:boolean=true;
  leftContent = {
      'label'  :  'Available',
      'componentId':'Available',
      'listItems' : [
          { 'code' : '1', 'label' : 'Austin','selected':false } ,
          { 'code' : '2', 'label' : 'Round Rock' ,'selected':false } ,
          { 'code' : '3' , 'label' : 'Cedar Park' ,'selected':false } ,
          { 'code' : '4' , 'label' : 'Leander' ,'selected':false } ,
          { 'code' : '5' , 'label' : 'Pflugerville' ,'selected':false } ,
          { 'code' : '6' , 'label' : 'Georgetown' ,'selected':false } ,
          { 'code' : '7' , 'label' : 'Buda' ,'selected':false } ,
          { 'code' : '8' , 'label' : 'Kyle' ,'selected':false } ,
          { 'code' : '9' , 'label' : 'San Marcos' ,'selected':false } ,
          { 'code' : '10' , 'label' : 'Hutto' ,'selected':false } ,
          { 'code' : '11' , 'label' : 'Drpping Springs' ,'selected':false  } ,
          { 'code' : '12' , 'label' : 'New Braunfels' ,'selected':false } ,
          { 'code' : '13' , 'label' : 'Bastrop' ,'selected':false } ,
      ]
  };
 
     leftSelectedItems=[];
     rightSelectedItems=[];
     
 
 
     rightContent = {
         'label' : 'Selected',
         'componentId':'Selected',
         'listItems' : []
     };
     
   constructor() { }
 
   ngOnInit() {
   }
     
     
     
     onSelectedItem(selectedItem:{"componentId":string,
                                   "item":{"label":string,"code":string}}){
     
        if(selectedItem.componentId==this.leftContent.componentId){
            this.leftSelectedItems.push(selectedItem.item);
        }else if(selectedItem.componentId==this.rightContent.componentId){
            this.rightSelectedItems.push(selectedItem.item);
        }
     }
     
     toggleLeftToRight(){
     this.rightContent.listItems=JSON.parse(JSON.stringify(this.leftSelectedItems));
     }
     
     onDeleteClicked(componentId:string){
         alert("inside onDelete ClickedE");
         console.log(componentId);
         console.log("selected Items"+JSON.stringify(this.rightSelectedItems));
     }
     
     onUnselectItem(unSelected:{"componentId":string,
                                 "item":{"label":string,"code":string}}){
       if (unSelected.componentId==this.rightContent.componentId) {
           
 
       }else if(unSelected.componentId==this.leftContent.componentId){
 
       }
 
 
     }
 
     removeItemFromList(item:{"label":string,"code":string},items:{"label":string,"code":string}[],keyCode:string){
       
    /*    items.forEach((index,ele)=>{
          if(ele[keyCode]==item[keyCode]){
            items.splice(items,index,1);
          }
       });*/
     }

}
