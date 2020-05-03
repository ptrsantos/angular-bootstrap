import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePaginationComplexComponent } from './table-pagination-complex.component';


import { MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [TablePaginationComplexComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [TablePaginationComplexComponent]
})
export class TablePaginationComplexModule { }
