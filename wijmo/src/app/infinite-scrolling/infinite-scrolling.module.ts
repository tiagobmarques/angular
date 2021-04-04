import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { InfiniteScrollingRoutingModule } from './infinite-scrolling-routing.module';
import { InfiniteScrollingComponent } from './infinite-scrolling.component';


@NgModule({
  declarations: [InfiniteScrollingComponent],
  imports: [
    CommonModule,
    InfiniteScrollingRoutingModule,
    WjGridModule
  ]
})
export class InfiniteScrollingModule { }
