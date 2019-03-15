import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/AppareilService';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
