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
import { PipedemoPipe } from './pipedemo.pipe';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { SqrPipe } from './sqr.pipe';
import { CubepipePipe } from './cubepipe.pipe';
import { ServdemoComponent } from './servdemo/servdemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
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
    ReactiveformComponent,
    PipedemoPipe,
    PipecompComponent,
    SqrPipe,
    CubepipePipe,
    ServdemoComponent,
    A1Component,
    A2Component,
    A3Component
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
