/*
-Travis Rosen
-07/09/2022
-app.routing-module.ts
-Routes for application
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: CalcComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
