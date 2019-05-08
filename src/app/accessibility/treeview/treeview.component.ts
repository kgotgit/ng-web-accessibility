import { Component, OnInit, Input } from '@angular/core';
import { TreeModel } from 'src/app/model/tree.model';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input("treeModel") model:TreeModel;

}
