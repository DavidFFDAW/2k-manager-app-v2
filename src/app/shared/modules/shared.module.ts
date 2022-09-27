import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ToastrModule
  ]
})
export class SharedModule { }
