import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './components/table-list/table-list.component';



@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableListComponent
  ]
})
export class SharedModule { }
