import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComboboxComponent } from '../demo/demo-combobox/demo-combobox.component';
import { DemoTransferlistComponent } from '../demo/demo-transferlist/demo-transferlist.component';

const routes: Routes = [
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'transferlist', component: DemoTransferlistComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule {

  

 }
