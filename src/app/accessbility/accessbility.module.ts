import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboboxComponent],
  exports:[ComboboxComponent]
})
export class AccessbilityModule { }
