import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private toggleHeaderSubject =new Subject<boolean>();


  showSideNav:boolean=true;
  toggleLeftNav($event:any){
    this.showSideNav=!this.showSideNav;
    this.toggleHeaderSubject.next(this.showSideNav);
  }

  isToggleLeftNav(): Observable<boolean> {
    return this.toggleHeaderSubject.asObservable();
  }


}
