import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private toggleHeaderSubject =new Subject<boolean>();


  showSideNav:boolean=true;
  toggleLeftNav(showSideBar:boolean){
    this.toggleHeaderSubject.next(showSideBar);
  }

  isToggleLeftNav(): Observable<boolean> {
    return this.toggleHeaderSubject.asObservable();
  }


}
