import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleDatamapsRoutingModule } from './simple-datamaps-routing.module';
import { SimpleDatamapsComponent } from './simple-datamaps.component';


@NgModule({
  declarations: [SimpleDatamapsComponent],
  imports: [
    CommonModule,
    SimpleDatamapsRoutingModule,
    WjGridModule,
    WjInputModule
  ]
})
export class SimpleDatamapsModule { }
