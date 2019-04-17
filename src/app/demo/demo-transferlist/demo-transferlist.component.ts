import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-transferlist',
  templateUrl: './demo-transferlist.component.html',
  styleUrls: ['./demo-transferlist.component.scss']
})
export class DemoTransferlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  leftAreaItems = [
    { 'code' : '1', 'label' : 'Austin'} ,
    { 'code' : '2', 'label' : 'Round Rock' } ,
    { 'code' : '3' , 'label' : 'Cedar Park' } ,
    { 'code' : '4' , 'label' : 'Leander' } ,
    { 'code' : '5' , 'label' : 'Pflugerville' } ,
    { 'code' : '6' , 'label' : 'Georgetown' } ,
    { 'code' : '7' , 'label' : 'Buda' } ,
    { 'code' : '8' , 'label' : 'Kyle' } ,
    { 'code' : '9' , 'label' : 'San Marcos' } ,
    { 'code' : '10' , 'label' : 'Hutto' } ,
    { 'code' : '11' , 'label' : 'Drpping Springs'  } ,
    { 'code' : '12' , 'label' : 'New Braunfels' } ,
    { 'code' : '13' , 'label' : 'Bastrop' } ,
]

rightAreaItems=null;
leftAreaLabel="Available";
rightAreaLabel="Selected";

leftAreaId="Available";
rightAreaId="Selected";
code="code";
label="label";
}
