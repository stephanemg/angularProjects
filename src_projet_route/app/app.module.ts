import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { MagicComponent } from './magic/magic.component';

//definition des routes
const appRoutes = [
  { path: 'jeux', component: MagicComponent },
  { path: 'carte', component: CarteComponent },
  { path: '', component: CarteComponent },
  { path: '**', component: CarteComponent }
]

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
