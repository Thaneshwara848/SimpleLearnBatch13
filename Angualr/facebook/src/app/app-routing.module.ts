import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { EntryComponent } from './entry/entry.component';
import { FormsComponent } from './forms/forms.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'directive',
    component:DirectivedemoComponent
  },
  {
    path:'binding',
    component:BindingComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:EntryComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
