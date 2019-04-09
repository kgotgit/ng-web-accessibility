import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { TransferlistboxComponent } from './transferlistbox/transferlistbox.component';
import { FilterlistboxComponent } from './transferlistbox/filterlistbox/filterlistbox.component';
import {KeywordsearchPipe} from "./transferlistbox/pipes/keywordsearch.pipe";
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ComboboxComponent, TransferlistboxComponent, FilterlistboxComponent, KeywordsearchPipe],
  exports:[ComboboxComponent,TransferlistboxComponent,FilterlistboxComponent]
})
export class AccessibilityModule { }
