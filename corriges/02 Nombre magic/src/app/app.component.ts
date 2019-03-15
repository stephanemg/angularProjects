import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre:string;
  info:string;
  tour = 0;
  rejouer = false;
  magic= Math.floor(Math.random() *100)+1;
  
  onRejouer(){
  	this.rejouer = false;
	this.tour = 0;
	this.magic= Math.floor(Math.random() *100)+1;
  }
  onTest(){
  	this.tour++;
  	console.log(this.magic);
  	let nb= parseInt(this.nombre);
  	this.nombre=''; // je vide le champ input
  	if (this.tour > 5 ){
  		this.info='PERDU !';
  		this.rejouer=true;
  	}
  	else if (nb > this.magic){
  		this.info='Trop Grand';
  	}else if (nb < this.magic){
  		this.info='Trop Petit';
  	}else if(nb === this.magic){
  		this.info='GAGNE !!!';
  		this.rejouer=true;
  	}else{
  		this.info='???';
  	}

  }
}
