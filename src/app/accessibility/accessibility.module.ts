import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { ListboxComponent } from './listbox/listbox.component';
import { SingleSelectListboxComponent } from './listbox/single-select-listbox/single-select-listbox.component';
import { MultiSelectListboxComponent } from './listbox/multi-select-listbox/multi-select-listbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboboxComponent, ListboxComponent, SingleSelectListboxComponent, MultiSelectListboxComponent],
  exports:[ComboboxComponent]
})
export class AccessibilityModule { }
