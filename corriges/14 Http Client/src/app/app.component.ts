import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 	 constructor(private httpClient: HttpClient){}
	 onRecherche(){
	 	let url= 'http://www.omdbapi.com/?apikey=???5&t=star wars';
	 	this.httpClient
	 	.get<any>(url)
	 	.subscribe(
        (response) => {
        	console.log(response.Year);
        	console.log(response.Title);
          console.log(response);
        }, (error) => {
          console.log('error');
        }
      );
	 }
}
