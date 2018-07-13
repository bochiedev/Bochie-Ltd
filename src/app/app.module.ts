import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { TypingAnimationDirective } from 'angular-typing-animation'
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavComponent } from './pages/nav/nav.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypingAnimationDirective,
    HomepageComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
