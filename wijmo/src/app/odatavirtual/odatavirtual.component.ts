import { Component, OnInit } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcOData from '@grapecity/wijmo.odata';

@Component({
  selector: 'app-odatavirtual',
  templateUrl: './odatavirtual.component.html',
  styleUrls: ['./odatavirtual.component.scss']
})
export class OdatavirtualComponent implements OnInit {

  ngOnInit(): void {
  }

  //orderDetails: wjcOData.ODataCollectionView;
  virtualOrderDetails: wjcOData.ODataVirtualCollectionView;
  itemCount: string;
  totalItemCount: string;

  // DataSvc will be passed by derived classes
  constructor() {
      // get order details into an ODataCollectionView
      let url = 'https://services.odata.org/Northwind/Northwind.svc',
          table = 'Order_Details_Extendeds';
      //this.orderDetails = new wjcOData.ODataCollectionView(url, table);
      this.virtualOrderDetails = new wjcOData.ODataVirtualCollectionView(url, table, {
          loaded: (sender: any, e: any) => {
              this.totalItemCount = wjcCore.format('{totalItemCount:n0} items', sender);
          }
      });
  }

  /*gridInitialized(flexgrid: wjcGrid.FlexGrid) {
      flexgrid.formatItem.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.FormatItemEventArgs) => { // show row indices in row headers
    if (e.panel.cellType == wjcGrid.CellType.RowHeader) {
              e.cell.textContent = (e.row + 1).toString();
          }
      });

      flexgrid.loadedRows.addHandler((sender: wjcGrid.FlexGrid, e: wjcCore.EventArgs) => {
          this.itemCount = wjcCore.format('{length:n0} items', sender.rows);
      });
  }*/

  virtualGridInitialized(flexgrid: wjcGrid.FlexGrid) {
      flexgrid.formatItem.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.FormatItemEventArgs) => { // show row indices in row headers
        if (e.panel.cellType == wjcGrid.CellType.RowHeader) {
            e.cell.textContent = (e.row + 1).toString();
        }
      });

      flexgrid.scrollPositionChanged.addHandler(() => {
          let rng = flexgrid.viewRange;
          this.virtualOrderDetails.setWindow(rng.row, rng.row2);
      });
  }
}
