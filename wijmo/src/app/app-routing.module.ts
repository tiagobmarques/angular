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
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
