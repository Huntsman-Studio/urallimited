import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AgricultureComponent } from './main/agriculture/agriculture.component';
import { AgriexportComponent } from './main/agriculture/agriexport/agriexport.component';
import { GbComponent } from './main/agriculture/gb/gb.component';
import { LeonessaComponent } from './main/agriculture/leonessa/leonessa.component';
import { OmnigearComponent } from './main/agriculture/omnigear/omnigear.component';
import { PlasticComponent } from './main/plastic/plastic.component';
import { TechnologyComponent } from './main/technology/technology.component';
import { NamliComponent } from './main/plastic/namli/namli.component';
import { NurpetComponent } from './main/plastic/nurpet/nurpet.component';
import { VimiComponent } from './main/technology/vimi/vimi.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    AboutComponent,
    AgricultureComponent,
    AgriexportComponent,
    GbComponent,
    LeonessaComponent,
    OmnigearComponent,
    PlasticComponent,
    TechnologyComponent,
    NamliComponent,
    NurpetComponent,
    VimiComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
