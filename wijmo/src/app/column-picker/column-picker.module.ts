import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnPickerRoutingModule } from './column-picker-routing.module';
import { ColumnPickerComponent } from './column-picker.component';

import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [ColumnPickerComponent],
  imports: [
    CommonModule,
    ColumnPickerRoutingModule,
    WjInputModule,
    WjGridModule,
  ]
})
export class ColumnPickerModule { }
