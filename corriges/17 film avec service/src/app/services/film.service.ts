import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FilmService{
	liste = {
		tabFilm:[]
	}
	filmSubject = new Subject();
	constructor(private httpClient:HttpClient){

	}
	emitFilmSubject(){
		this.filmSubject.next(this.liste);
	}

	lire(){
		this.httpClient
      .get<any>('https://gestion-equipe.firebaseio.com/film.json')
      .subscribe(
        (response) => {

          if (response == undefined ){
          	console.log('ola');
          	this.liste.tabFilm=[];
          }else{
          	console.log('test');
          	this.liste = response;
      	  }
          this.emitFilmSubject();
          console.log('lecture OK !');
        }, (error) => {
          console.log('error');
        }
      );
		
	}
	ecrire(){
		let url = 'https://gestion-equipe.firebaseio.com/film.json';
		this.httpClient
      .put(url, this.liste)
      .subscribe(
        () => {
          console.log('envoie OK !');
        }, (error) => {
          console.log('error');
        }
      );
	}

}