import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { ListboxComponent } from './listbox/listbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboboxComponent, ListboxComponent],
  exports:[ComboboxComponent]
})
export class AccessibilityModule { }
