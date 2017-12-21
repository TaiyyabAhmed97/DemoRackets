import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent, // tslint:disable:one-line
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
