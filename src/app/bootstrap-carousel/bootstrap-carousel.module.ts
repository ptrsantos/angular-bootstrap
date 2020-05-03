import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapCarouselComponent } from './bootstrap-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [BootstrapCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [BootstrapCarouselComponent]
})
export class BootstrapCarouselModule { }
