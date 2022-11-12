import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule
  ],
  exports: [
    HeaderModule
  ]
})
export class ModulesModule { }
