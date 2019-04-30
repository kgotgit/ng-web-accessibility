import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { TransferlistboxComponent } from './transferlistbox/transferlistbox.component';
import { FilterlistboxComponent } from './transferlistbox/filterlistbox/filterlistbox.component';
import {KeywordsearchPipe} from "./transferlistbox/pipes/keywordsearch.pipe";
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertsComponent } from './alerts/alerts.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule

  ],
  declarations: [ComboboxComponent, TransferlistboxComponent, FilterlistboxComponent, KeywordsearchPipe, AlertsComponent],
  exports:[ComboboxComponent,TransferlistboxComponent,FilterlistboxComponent,AlertsComponent],
  entryComponents: [AlertsComponent]
})
export class AccessibilityModule { }
