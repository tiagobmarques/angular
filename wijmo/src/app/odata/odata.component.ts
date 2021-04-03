import { Component, ViewChild } from '@angular/core';
import { ODataCollectionView } from '@grapecity/wijmo.odata';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-odata',
  templateUrl: './odata.component.html',
  styleUrls: ['./odata.component.scss']
})
export class OdataComponent  {
  customers: ODataCollectionView;
  itemCount: string;

  // DataSvc will be passed by derived classes
  constructor() {
      let url = 'https://services.odata.org/Northwind/Northwind.svc';
      this.customers = new ODataCollectionView(url, 'Customers', {
          sortOnServer: true,
          filterOnServer: true
      });
  }

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {

      flexgrid.loadedRows.addHandler(()=> {
          this.itemCount = flexgrid.rows.length + ' items';
      });
  }
}
