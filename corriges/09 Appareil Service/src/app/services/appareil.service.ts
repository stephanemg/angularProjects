import { Appareil} from '../models/Appareil';

export class AppareilService{
	tabAppareil:Appareil[]= [
  	{name :'TV',status: 'allumé'},
  	{name :'Xbox',status: 'allumé'},
  	{name :'PlayStation',status: 'éteint'}

  ];
  switchAllOn(){
  	for(let a of this.tabAppareil){
  		a.status = 'allumé';
  	}
  }
}