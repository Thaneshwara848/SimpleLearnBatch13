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
    AttrubutedirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
