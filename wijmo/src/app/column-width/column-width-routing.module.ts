import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnWidthComponent } from './column-width.component';

const routes: Routes = [
  {
    path: '',
    component: ColumnWidthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnWidthRoutingModule { }
