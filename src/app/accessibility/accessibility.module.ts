import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox/combobox.component';
import { ListboxComponent } from './listbox/listbox.component';
import { SingleSelectListboxComponent } from './listbox/single-select-listbox/single-select-listbox.component';
import { MultiSelectListboxComponent } from './listbox/multi-select-listbox/multi-select-listbox.component';
import { ListboxDirective } from './listbox.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComboboxComponent, 
                ListboxComponent, 
                SingleSelectListboxComponent, 
                MultiSelectListboxComponent,
                ListboxDirective],
  exports:[ComboboxComponent,
           ListboxComponent, 
           SingleSelectListboxComponent, 
           MultiSelectListboxComponent,
           ListboxDirective]
})
export class AccessibilityModule { }
