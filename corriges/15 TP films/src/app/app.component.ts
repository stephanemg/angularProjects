import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    titre:string;
    tab:any[];
    tabFav:any[] = [];

 	 constructor(private httpClient: HttpClient){}
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
   }
}
