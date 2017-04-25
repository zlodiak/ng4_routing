import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'page1',
    children: [],
    component: Page1Component
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
