import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { FilmService} from './services/film.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
  	HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
