import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { TransferlistboxComponent } from './transferlistbox/transferlistbox.component';
import { FilterlistboxComponent } from './transferlistbox/filterlistbox/filterlistbox.component';
import {KeywordsearchPipe} from "./transferlistbox/pipes/keywordsearch.pipe";
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertsComponent } from './alerts/alerts.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TreeviewComponent } from './treeview/treeview.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule

  ],
  declarations: [ComboboxComponent, TransferlistboxComponent, FilterlistboxComponent, KeywordsearchPipe, AlertsComponent, ProgressbarComponent, TreeviewComponent],
  exports:[ComboboxComponent,TransferlistboxComponent,FilterlistboxComponent,AlertsComponent,ProgressbarComponent,TreeviewComponent],
  entryComponents: [AlertsComponent]
})
export class AccessibilityModule { }
