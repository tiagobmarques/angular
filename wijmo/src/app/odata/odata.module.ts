import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { OdataComponent } from './odata.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdataRoutingModule } from './odata-routing.module';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [OdataComponent],
  imports: [
    CommonModule,
    OdataRoutingModule,
    WjGridModule,
    WjGridFilterModule
  ]
})
export class OdataModule { }
