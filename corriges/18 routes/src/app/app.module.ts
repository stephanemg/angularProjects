import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { MagicComponent } from './magic/magic.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes  =[
     { path: 'jeux', component:MagicComponent },
     { path: 'carte', component:CarteComponent },
     { path: '', component:CarteComponent },
     { path: '**', component:MagicComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    MagicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
