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
  switchAllOff(){
  	for(let a of this.tabAppareil){
  		a.status = 'éteint';
  	}
  }
  switchOnOne(i:number){
  	this.tabAppareil[i].status = 'allumé';
  }
  switchOnOff(i:number){
  	this.tabAppareil[i].status = 'éteint';
  }

}