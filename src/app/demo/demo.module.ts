import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComboboxComponent } from './demo-combobox/demo-combobox.component';
import { DemoTransferlistComponent } from './demo-transferlist/demo-transferlist.component';
import { AccessibilityModule } from '../accessibility/accessibility.module';

@NgModule({
  imports: [
    CommonModule,
    AccessibilityModule,
  ],
  declarations: [DemoComboboxComponent, DemoTransferlistComponent]
})
export class DemoModule { }
