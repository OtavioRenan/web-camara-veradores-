import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjutancyComponent } from './adjutancy/adjutancy.component';

@NgModule({
  declarations: [
    AdjutancyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class PagesModule { }
