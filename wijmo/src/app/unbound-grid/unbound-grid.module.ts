import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnboundGridRoutingModule } from './unbound-grid-routing.module';
import { UnboundGridComponent } from './unbound-grid.component';


@NgModule({
  declarations: [UnboundGridComponent],
  imports: [
    CommonModule,
    UnboundGridRoutingModule,
    WjGridModule
  ]
})
export class UnboundGridModule { }
