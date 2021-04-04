import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatamapsEditorsRoutingModule } from './datamaps-editors-routing.module';
import { DatamapsEditorsComponent } from './datamaps-editors.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
//

@NgModule({
  declarations: [DatamapsEditorsComponent],
  imports: [
    CommonModule,
    DatamapsEditorsRoutingModule,
    WjGridModule,
    WjInputModule,
  ]
})
export class DatamapsEditorsModule { }
