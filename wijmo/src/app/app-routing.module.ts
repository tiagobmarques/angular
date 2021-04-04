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
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
