import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FilmService } from './services/film.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { AjoutsComponent } from './ajouts/ajouts.component';
const appRoutes = [
  { path: 'playlist', component: PlaylistComponent },
  { path: 'ajouts', component: AjoutsComponent },
  { path: '', component: PlaylistComponent },
  { path: '**', component: PlaylistComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    AjoutsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FilmService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
