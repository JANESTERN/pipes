import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { ProductsComponent } from './products/products.component';
import { shorten } from 'src/shorten';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    DisplaydetailsComponent,
    ProductsComponent,
    shorten,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
