/*
-Travis Rosen
-07/09/2022
-app.module.ts
-Imports for application
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalcComponent } from './calc/calc.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    BaseLayoutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
