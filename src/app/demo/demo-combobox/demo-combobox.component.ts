import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-combobox',
  templateUrl: './demo-combobox.component.html',
  styleUrls: ['./demo-combobox.component.scss']
})
export class DemoComboboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  options=[
    {"code":"1","label":"Yellow"},
    {"code":"2","label":"Blue"},
    {"code":"3","label":"Green"},
    {"code":"4","label":"Black"},
    {"code":"5","label":"Red"},
    {"code":"6","label":"Purple"},
    {"code":"7","label":"Pink"},
  ]
}
