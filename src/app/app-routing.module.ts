import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Bind1Component } from './bind1/bind1.component';
import { ProductComponent } from './product/product.component';
import { SpecsComponent } from './specs/specs.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'page1',
    children: [],
    component: Page1Component
  }, 
  {
    path: 'bind1',
    children: [],
    component: Bind1Component
  }, 
  {
    path: 'product/:id',
    children: [{ path: 'specs', component: SpecsComponent }],
    component: ProductComponent
  }      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
