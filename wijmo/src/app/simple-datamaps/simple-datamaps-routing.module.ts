import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleDatamapsComponent } from './simple-datamaps.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleDatamapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleDatamapsRoutingModule { }
