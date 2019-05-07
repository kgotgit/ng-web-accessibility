import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComboboxComponent } from '../demo/demo-combobox/demo-combobox.component';
import { DemoTransferlistComponent } from '../demo/demo-transferlist/demo-transferlist.component';
import { DemoModalwindowComponent } from '../demo/demo-modalwindow/demo-modalwindow.component';
import { DemoTabsComponent } from '../demo/demo-tabs/demo-tabs.component';
import { DemoTablesComponent } from '../demo/demo-tables/demo-tables.component';
import { DemoProgressbarsComponent } from '../demo/demo-progressbars/demo-progressbars.component';
import { DemoAlertsComponent } from '../demo/demo-alerts/demo-alerts.component';
import { DemoListgroupComponent } from '../demo/demo-listgroup/demo-listgroup.component';
import { DemoTreeviewComponent } from '../demo/demo-treeview/demo-treeview.component';

const routes: Routes = [
  { path: '', redirectTo:"transferlist", pathMatch: 'full'},
  { path: 'combobox', component: DemoComboboxComponent },
  { path: 'transferlist', component: DemoTransferlistComponent },
  { path: 'modalwindow', component: DemoModalwindowComponent},
  { path: 'tabs', component: DemoTabsComponent},
  { path: 'tables', component: DemoTablesComponent},
  { path: 'progressbars', component: DemoProgressbarsComponent},
  { path: 'alerts', component: DemoAlertsComponent},
  { path: 'listgroup', component: DemoListgroupComponent},
  { path: 'treeview', component: DemoTreeviewComponent}
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
