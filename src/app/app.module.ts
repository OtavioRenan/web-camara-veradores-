import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
