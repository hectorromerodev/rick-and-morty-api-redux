import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { ScrollUpBtnComponent } from './components/scroll-up-btn/scroll-up-btn.component';
import { ScrollUpBtnDirective } from './directives/scroll-up-btn.directive';



@NgModule({
  declarations: [
    NoDataFoundComponent,
    ScrollUpBtnComponent,
    ScrollUpBtnDirective,
  ],
  exports: [
    NoDataFoundComponent,
    ScrollUpBtnComponent,
    ScrollUpBtnDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
