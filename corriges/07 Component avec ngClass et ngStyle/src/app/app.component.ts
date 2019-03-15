import { Component } from '@angular/core';
import { Appareil } from './models/Appareil';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabAppareil:Appareil[] = [
  	{name :'TV',status: 'allumé'},
  	{name :'Xbox',status: 'allumé'},
  	{name :'PlayStation',status: 'éteint'}

  ];
  onAllumer(){
  	for(let a of this.tabAppareil){
  		a.status = 'allumé';
  	}
  }
  onEteindre(){
  	for(let a of this.tabAppareil){
  		a.status = 'éteint';
  	}
  }


}
