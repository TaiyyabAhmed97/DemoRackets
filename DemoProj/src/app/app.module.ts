import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackendModule } from './backend/backend.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // tslint:disable:one-line
  ],
  imports: [
    BrowserModule, BackendModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
