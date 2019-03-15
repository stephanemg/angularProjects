import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableau:any[];

  onAction(){
  	let tab:any[] =[];
  	tab[0] = 'pomme';
  	tab.push('poire');
  	tab.push('cerise');
  	// enelever poire
  	tab.splice(1,1); // i et nb element à enlever
  	console.log(tab);

  	for(let i=0;i<tab.length;i++){
  		console.log(tab[i]);
  	}
  	//--
  	for (let fruit of tab){
  		console.log(fruit);
  	}
  	//-----------
  	for(let i in tab){
  		console.log(tab[i]);
  	}
  	this.tableau = tab;
  	//---------------------
  	let p:any = {};
  	p.nom = 'DOE';
  	p.prenom ='John'; 

  	let p2 = { nom :'PITT', prenom:'Brad'};

  }
}
