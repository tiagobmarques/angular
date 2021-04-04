import { Component, OnInit, ViewChild } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-simple-datamaps',
  templateUrl: './simple-datamaps.component.html',
  styleUrls: ['./simple-datamaps.component.scss']
})
export class SimpleDatamapsComponent implements OnInit {

  ngOnInit(): void {
  }

  data: any[];
  customerMap: wjcGrid.DataMap;

  countries = 'US,Germany,UK,Japan,Sweden,Norway,Denmark'.split(',');
  customers = [
      { id: 0, name: 'Paul Perkins', address: '123 Main St' },
      { id: 1, name: 'Susan Smith', address: '456 Grand Ave' },
      { id: 2, name: 'Joan Jett', address: '789 Broad St' },
      { id: 3, name: 'Don Davis', address: '321 Shattuck Ave' },
  ];

  @ViewChild('mainGrid', { static: true }) mainGrid: wjcGrid.FlexGrid;

  // DataSvc will be passed by derived classes
  constructor() {
      this.data = this._getData();
      this.customerMap = new wjcGrid.DataMap(this.customers, 'id', 'name');
  }

  dataMapGridInitialized(flexgrid: wjcGrid.FlexGrid) {
      flexgrid.rowEditEnded.addHandler(() => {
          let column = this.mainGrid.getColumn('customer');
          if (column) {
              column.dataMap = new wjcGrid.DataMap(this.customers, 'id', 'name');
          }
          this.mainGrid.refresh(); // update customer names on the main grid
      });
  }

  private _getData() {
      let data = [];
      for (let i = 0; i < this.countries.length; i++) {
          data.push({
              id: i,
              country: this.countries[i],
              customer: this.customers[i % this.customers.length].id,
              active: i % 5 != 0,
              downloads: Math.round(Math.random() * 200000),
              sales: Math.random() * 100000,
              expenses: Math.random() * 50000
          });
      }
      return data;
  }
}
