import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [BackendComponent],
  exports: [BackendComponent],
  providers: [BackendService, HttpClientModule]
})
export class BackendModule { }
