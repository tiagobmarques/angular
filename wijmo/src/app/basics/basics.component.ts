import { Component, ViewChild } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {
  data: any[];
  selectedItem: string;

  // references FlexGrid named 'flex' in the view
  @ViewChild('flex', { static: true }) flex: wjcGrid.FlexGrid;

  // DataSvc will be passed by derived classes
  constructor() {
    this.data = this._getData();
  }

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {
    // sort the data by country
    let sd = new wjcCore.SortDescription('name', true);
    flexgrid.collectionView.sortDescriptions.push(sd);
    flexgrid.collectionView.currentChanged.addHandler(this._updateCurrentInfo.bind(this));
    this._updateCurrentInfo();
  }

  private _getData() {
    // create some random data
    let participants = 'Tiago,Samira,Nicolas,Valentina,Carlos,Roseli'.split(','),
        data = [];
    for (let i = 0; i < participants.length; i++) {
        data.push({
            id: i,
            name: participants[i],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }

    return data;
  }

  private _updateCurrentInfo() {
    this.selectedItem = wjcCore.format(
        'Name: <b>{name}</b>, Sales: <b>{sales:c0}</b> Expenses: <b>{expenses:c0}</b>',
        this.flex.collectionView.currentItem);
  }
}
