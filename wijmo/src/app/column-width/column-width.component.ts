import { DataService } from './app.data';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-column-width',
  templateUrl: './column-width.component.html',
  styleUrls: ['./column-width.component.scss']
})
export class ColumnWidthComponent implements OnInit {

  ngOnInit(): void {
  }

  protected dataSvc: DataService;
  data: any[];
  // references FlexGrid named 'flex' in the view
  @ViewChild('flex', { static: true }) flex: wjcGrid.FlexGrid;

  // DataSvc will be passed by derived classes
  constructor( @Inject(DataService) dataSvc: DataService) {
      this.dataSvc = dataSvc;
      this.data = dataSvc.getData(500);
  }
}
