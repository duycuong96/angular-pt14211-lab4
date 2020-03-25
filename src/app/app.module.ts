import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';

import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    HelloComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
