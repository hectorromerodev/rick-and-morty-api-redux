import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoaderComponent } from './spinner-loader.component';

@NgModule({
  declarations: [
    SpinnerLoaderComponent,
  ],
  exports: [
    SpinnerLoaderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SpinnerLoaderModule { }
