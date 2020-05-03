import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModalComponent } from './bootstrap-modal.component';

/** Importação usada pelo modal */
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [BootstrapModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [BootstrapModalComponent]
})
export class BootstrapModalModule { }
