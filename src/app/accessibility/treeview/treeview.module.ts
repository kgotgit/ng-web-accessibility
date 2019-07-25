import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewComponent } from './treeview.component';

@NgModule({
  declarations: [TreeviewComponent],
  imports: [
    CommonModule
  ],
  exports:[TreeviewComponent]
})
export class TreeviewModule { }
