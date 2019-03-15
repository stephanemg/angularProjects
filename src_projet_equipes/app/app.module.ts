import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FormsModule } from '@angular/forms';
import {EntrepriseService} from './services/EntrepriseService';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
