import { BasicsRoutingModule } from './basics-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@NgModule({
  declarations: [BasicsComponent],
  imports: [
    CommonModule,
    BasicsRoutingModule,
    WjGridModule
  ]
})
export class BasicsModule { }
