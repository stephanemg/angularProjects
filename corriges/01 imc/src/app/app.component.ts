import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  poids:string;
  taille:string;
  imc:number;
  tranche:string;

  onCalcul(){
  	console.log(this.poids);
  	console.log(this.taille);
  	let p =parseFloat(this.poids); // converti en float
  	let t = parseFloat(this.taille);
  	let r = p / (t*t);
  	r = Math.round(r*10)/10;
  	this.imc= r;
  	if (this.imc <18.5){
  		this.tranche='maigreur';
  	}else if(this.imc <25){
  		this.tranche='normal';	
  	}else{
  		this.tranche='surpoids';	
  	}

  }
}
