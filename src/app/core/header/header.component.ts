import { Component, OnInit,OnDestroy  } from '@angular/core';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy  {


  private gitLogo=require("../../../assets/images/github-logo.png")
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    console.log(this.gitLogo);
  }

  toggleSideNav($event:any){
    this.commonService.toggleLeftNav($event);
  }



  ngOnDestroy() {
    
  }
}
