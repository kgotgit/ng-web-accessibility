import { Component, OnInit,OnDestroy  } from '@angular/core';
import { CommonService } from '../services/common.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy  {

  leftSideNavBarExpanded=true;
  
  constructor(private commonService:CommonService) { }

  ngOnInit() {
  
  }

  toggleSideNav($event:any){
    this.leftSideNavBarExpanded=!this.leftSideNavBarExpanded;
    this.commonService.toggleLeftNav(this.leftSideNavBarExpanded);
  }



  ngOnDestroy() {
    
  }
}
