import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Routes
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
