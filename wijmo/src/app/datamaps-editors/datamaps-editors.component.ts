import { Component, OnInit } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-datamaps-editors',
  templateUrl: './datamaps-editors.component.html',
  styleUrls: ['./datamaps-editors.component.scss']
})
export class DatamapsEditorsComponent implements OnInit {

  ngOnInit(): void {
  }

  data = this._getData();
  dataMap = this._getDataMap();

  private _getDataMap(): wjcGrid.DataMap {
      let countries = 'US,UK,Japan,Other'.split(','),
          arr = countries.map((name, id) => { return { id: id, name: name } });
      return new wjcGrid.DataMap(arr, 'id', 'name');
  }

  private _getData(): any[] {
      debugger
      let data = [],
          map = this._getDataMap(),
          len = map.collectionView.items.length;

      for (let i = 0; i < 20; i++) {
          data.push({
              id: i,
              country: Math.floor(Math.random() * len),
              active: i % 5 != 0,
              downloads: Math.round(Math.random() * 200000),
              sales: Math.random() * 100000,
              expenses: Math.random() * 50000
          });
      }
      return data;
  }

}
