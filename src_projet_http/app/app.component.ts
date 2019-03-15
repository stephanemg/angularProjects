import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './models/Film';
import { Films } from './models/Films';
import { FilmService } from './services/film.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  film:string;
  arrFilms: Film[];
  playlistFilms: Film[];
  films:Films;
  //objet pour gestion asynchrone de la personne
  filmSubscription: Subscription;
  ngOnInit(): void {
    this.arrFilms = this.filmService.arrFilms;
    this.playlistFilms = this.filmService.playlistFilms;
    this.films = this.filmService.films;

   //on souscrit a la personne mise dans le subject
   this.filmSubscription = this.filmService.filmsSubject.subscribe(
    //des que la playlist est recue, elle est mise dans le component
    (p: any) => { this.playlistFilms = p.films; }
  );

    this.readFirebase();
  }


  constructor(private filmService: FilmService, private httpClient:HttpClient) { };
  onRecherche() {
    this.filmService.recherche(this.film);
  }

  ajoutePlaylist(film) {
    // console.log(film);
    this.playlistFilms.push(film);
    this.writeFirebase();
  }
  writeFirebase() {
    this.filmService.ecrire();
    // for (let f of this.playlist) {
    //   localStorage.setItem(f.title, f.url);
    // }
  }
  readFirebase() {
    this.filmService.lire();
    // }
  }
}
