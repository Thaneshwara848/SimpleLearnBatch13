import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { EntryComponent } from './entry/entry.component';
import { FormsComponent } from './forms/forms.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { HttpdemoComponent } from './httpdemo/httpdemo.component';
import { LoginComponent } from './login/login.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { ServdemoComponent } from './servdemo/servdemo.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'httpdemo',
    component:HttpdemoComponent
  },
  {
    path:'serv',
    component:ServdemoComponent
  },
  {
      path:'pipe',
      component:PipecompComponent
  },
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
    component:LoginComponent
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
