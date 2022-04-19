import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AgriexportComponent } from './agriexport/agriexport.component';
import { GbComponent } from './gb/gb.component';
import { LaleonessaComponent } from './laleonessa/laleonessa.component';
import { OmnigearComponent } from './omnigear/omnigear.component';
import { HuntsmanComponent } from './huntsman/huntsman.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    AgriexportComponent,
    GbComponent,
    LaleonessaComponent,
    OmnigearComponent,
    HuntsmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
