import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input("ariaValueNow") ariaValueNow:string="0";
  @Input("ariaValueMin") ariaValueMin:string="0";
  @Input("ariaValueMax") ariaValueMax:string="100";
  @Input("progressStyle") progressStyle:string="progress-bar-striped progress-bar-animated"
  



  
}
