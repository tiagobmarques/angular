import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { OdatavirtualRoutingModule } from './odatavirtual-routing.module';
import { OdatavirtualComponent } from './odatavirtual.component';


@NgModule({
  declarations: [OdatavirtualComponent],
  imports: [
    CommonModule,
    OdatavirtualRoutingModule,
    WjGridModule
  ]
})
export class OdatavirtualModule { }
