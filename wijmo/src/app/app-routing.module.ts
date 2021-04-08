import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basics',
        loadChildren: () =>
          import('./basics/basics.module').then(m => m.BasicsModule),
      },
      {
        path: 'odata',
        loadChildren: () =>
          import('./odata/odata.module').then(m => m.OdataModule),
      },
      {
        path: 'odatavirtual',
        loadChildren: () =>
          import('./odatavirtual/Odatavirtual.module').then(m => m.OdatavirtualModule),
      },
      {
        path: 'infinite-scrolling',
        loadChildren: () =>
          import('./infinite-scrolling/infinite-scrolling.module').then(m => m.InfiniteScrollingModule),
      },
      {
        path: 'unbound-grid',
        loadChildren: () =>
          import('./unbound-grid/unbound-grid.module').then(m => m.UnboundGridModule),
      },
      {
        path: 'column-width',
        loadChildren: () =>
          import('./column-width/column-width.module').then(m => m.ColumnWidthModule),
      },
      {
        path: 'simple-datamaps',
        loadChildren: () =>
          import('./simple-datamaps/simple-datamaps.module').then(m => m.SimpleDatamapsModule),
      },
      {
        path: 'dynamic-datamaps',
        loadChildren: () =>
          import('./dynamic-datamaps/dynamic-datamaps.module').then(m => m.DynamicDatamapsModule),
      },
      {
        path: 'datamaps-editors',
        loadChildren: () =>
          import('./datamaps-editors/datamaps-editors.module').then(m => m.DatamapsEditorsModule),
      },
      {
        path: 'column-picker',
        loadChildren: () =>
          import('./column-picker/column-picker.module').then(m => m.ColumnPickerModule),
      },
      {
        path: 'reordering',
        loadChildren: () =>
          import('./reordering/reordering.module').then(m => m.ReorderingModule),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
