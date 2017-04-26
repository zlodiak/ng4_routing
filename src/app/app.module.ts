import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Bind1Component } from './bind1/bind1.component';
import { ProductComponent } from './product/product.component';
import { SpecsComponent } from './specs/specs.component';
import { AddSignsPipe } from './add-signs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Bind1Component,
    ProductComponent,
    SpecsComponent,
    AddSignsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
