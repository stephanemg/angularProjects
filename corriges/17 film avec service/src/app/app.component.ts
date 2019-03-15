import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FilmService} from './services/film.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    titre:string;
    tab:any[];
    tabFav:any[] = [];
    filmSubscription : Subscription;

 	 constructor(
      private httpClient: HttpClient,
      private filmService:FilmService){}
   
   ngOnInit(){
     this.filmSubscription =
      this.filmService.filmSubject.subscribe(
        (l: any) => {
          this.tabFav = l.tabFilm;
        }
      );
    this.filmService.emitFilmSubject();

    this.filmService.lire();
   }

	 onRecherche(){
     let titre = this.titre;
     this.titre ='';
     console.log(titre);
	 	let url= 'http://www.omdbapi.com/?apikey=efdc2275&s='+titre;
	 	this.httpClient
	 	.get<any>(url)
	 	.subscribe(
        (response) => {
        	console.log(response.Search);
          this.tab = response.Search;
        	//console.log(response.Title);
          //console.log(response);
        }, (error) => {
          console.log('error');
        }
      );



	 }

   onAjouter(i:number){
     this.tabFav.push(this.tab[i]);
     // j'enregistre ds le local storage
     let str = JSON.stringify(this.tabFav)
     localStorage.setItem('tab',str);
     this.filmService.ecrire();
   }
}
