import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ToastrModule
  ]
})
export class SharedModule { }
