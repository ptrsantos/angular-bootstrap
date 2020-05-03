import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapAccordionComponent } from './bootstrap-accordion.component';

/** biblioteca usada pelo accordion */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [BootstrapAccordionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  exports: [BootstrapAccordionComponent]
})
export class BootstrapAccordionModule { }
