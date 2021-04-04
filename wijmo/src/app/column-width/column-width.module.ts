import { DataService } from './app.data';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnWidthRoutingModule } from './column-width-routing.module';
import { ColumnWidthComponent } from './column-width.component';


@NgModule({
  declarations: [ColumnWidthComponent],
  imports: [
    CommonModule,
    ColumnWidthRoutingModule,
    WjGridModule
  ],
  providers: [DataService]
})
export class ColumnWidthModule { }
