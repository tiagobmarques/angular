import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { DynamicDatamapsRoutingModule } from './dynamic-datamaps-routing.module';
import { DynamicDatamapsComponent } from './dynamic-datamaps.component';


@NgModule({
  declarations: [DynamicDatamapsComponent],
  imports: [
    CommonModule,
    DynamicDatamapsRoutingModule,
    WjGridModule,
    WjInputModule
  ]
})
export class DynamicDatamapsModule { }
