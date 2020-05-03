import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { TableBasicComponent } from './table-basic.component';



@NgModule({
  declarations: [TableBasicComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableBasicComponent
  ]
})
export class TableBasicModule { }
