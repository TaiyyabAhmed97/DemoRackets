import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './form01/form01.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'form1',
        component: Form01Component
    },
    {
        path: '',
        component: AppComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymdouelRoutingModule { }
