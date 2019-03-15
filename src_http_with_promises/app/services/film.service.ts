import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/Film';
import { Films } from '../models/Films';
@Injectable()
//service pour transport de l'objet de facon asynchrone / firebase api rest
export class FilmService {
    //url compte firebase database
    private omdbUrl = 'http://www.omdbapi.com/?apikey=3b8F879&s='
    private url = "https://angular-782be.firebaseio.com/";
    public playlistFilms: Film[] = [];
    public arrFilms: Film[] = [];
    public films: Films = { films: [] };
    filmsSubject = new Subject();

    constructor(private httpClient: HttpClient) { };

    //on met le film a disposition dans le subject
    emitFilmSubject() {
        this.filmsSubject.next(this.films);
    }
    lire() {
        this.httpClient.get<any>(this.url + 'films.json')
            .subscribe(
                (response) => {
                    if (response != null) {
                        if (response.films == undefined) {
                            this.playlistFilms = [];
                        } else {
                            this.films = response;
                        }
                        this.emitFilmSubject();
                    }
                    else {
                        console.log('lire() rien dans la lecture');
                    }
                }, (error) => {
                    console.log('erreur lire');
                }

            );
        return this.playlistFilms;
    }
    //au niveau du noeud acteur.json j'enregistre ma personne
    ecrire() {
        this.films.films = this.playlistFilms
        this.httpClient.put(this.url + 'films.json', this.films)
            .subscribe(
                () => {
                    console.log('envoi OK');
                },
                () => {
                    console.log('erreur !');
                }
            );
    }
    parseResponseImages(response) {
        let arr = response.Search;
        if (arr != undefined) {
            for (let res of arr) {
                let film = new Film(res.Title, res.Poster);
                this.arrFilms.push(film);
            }
            //  this.arrFilms = arr;
        } else {
            this.arrFilms = [];
        }
    }
    rechercheSubscribe(film) {
        let url = this.omdbUrl + encodeURIComponent(film);

        this.httpClient.get<any>(url)
            .subscribe(
                (response) => {
                    this.parseResponseImages(response);
                }, (error) => {
                    console.log(error);
                });
    }
    // one shot
    recherchePromise(film) {
        let url = this.omdbUrl + encodeURIComponent(film);

        let promise = new Promise((resolve, reject) => {
            this.httpClient.get(url)
                .toPromise()
                .then(
                    (res) => { // Success
                        let r:Film[] = [];
                        for (let re of res['Search']) {
                            let film = new Film(re.Title, re.Poster);
                            r.push(film);
                        }
                       // this.parseResponseImages(res);
                       
                        resolve(r);
                    }
                );
        });
        return promise;
    }
}