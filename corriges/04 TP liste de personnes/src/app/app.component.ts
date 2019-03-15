import { Component } from '@angular/core';
import {Personne} from './models/Personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 	nom:string;
 	prenom:string;
 	tableau:Personne[] = [
 		{nom:'CRUISE',prenom:'Tom'},
 		{nom:'PITT',prenom:'Brad'}
 	];
/*
 	onAjouter(){
 		let p:any = {};
 		p.nom =  this.nom;
 		p.prenom = this.prenom;
 		this.nom= '';
 		this.prenom='';
 		this.tableau.push(p);
 	}
 */
 onAjouter(){
 		let p = new Personne(this.nom,this.prenom);
 		this.nom= '';
 		this.prenom='';
 		this.tableau.push(p);
 	}
 	onDelete(i:number){
 		this.tableau.splice(i,1);
 	}

}
