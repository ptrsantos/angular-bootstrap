import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { TableBasicModule } from './table-basic/table-basic.module';
import { TablePaginationModule } from './table-pagination/table-pagination.module';
import { TablePaginationComplexModule } from './table-pagination-complex/table-pagination-complex.module';
import { BootstrapCarouselModule } from './bootstrap-carousel/bootstrap-carousel.module';
import { BootstrapAccordionModule } from './bootstrap-accordion/bootstrap-accordion.module';
import { BootstrapModalModule } from './bootstrap-modal/bootstrap-modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TableBasicModule,
    TablePaginationModule,
    TablePaginationComplexModule,
    BootstrapCarouselModule,
    BootstrapAccordionModule,
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
