import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { EntryComponent } from './entry/entry.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { AttrubutedirectiveComponent } from './attrubutedirective/attrubutedirective.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    GalaryComponent,
    EntryComponent,
    BindingComponent,
    DirectivedemoComponent,
    AttrubutedirectiveComponent,
    FormsComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
