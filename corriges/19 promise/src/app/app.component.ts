import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titre:string;

  getTitre(){
  	 return new Promise((resolve) => {
	  	setTimeout(
	      ()=>{
	      	resolve('Bonjour');
	      
	      },3000);
	  });
  }
  
  onAction(){
  	this.titre= 'Ola';
  	this.getTitre().then ( str => {
  		this.titre = str;
  	});
  	//this.titre = this.getTitre();
  }
}
