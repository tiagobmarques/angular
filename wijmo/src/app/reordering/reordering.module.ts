import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReorderingRoutingModule } from './reordering-routing.module';
import { ReorderingComponent } from './reordering.component';


@NgModule({
  declarations: [ReorderingComponent],
  imports: [
    CommonModule,
    ReorderingRoutingModule,
    WjGridModule
  ]
})
export class ReorderingModule { }
