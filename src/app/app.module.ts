import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatModule } from "./chat/chat.module";

import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChatModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
