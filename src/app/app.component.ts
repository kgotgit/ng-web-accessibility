import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

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
