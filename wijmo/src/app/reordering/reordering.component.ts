import { Component } from '@angular/core';

@Component({
  selector: 'app-reordering',
  templateUrl: './reordering.component.html',
  styleUrls: ['./reordering.component.scss']
})
export class ReorderingComponent {
  data: any[];

  // DataSvc will be passed by derived classes
  constructor() {
      this.data = this._getData();
  }

  private _getData() {
      // generate some random data
      let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
          data = [];
      for (let i = 0; i < countries.length; i++) {
          data.push({
              id: i,
              country: countries[i],
              downloads: Math.round(Math.random() * 20000),
              sales: Math.random() * 10000,
              expenses: Math.random() * 5000
          });
      }
      return data;
  }
}
