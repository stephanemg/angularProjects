import { Component, OnInit,Input } from '@angular/core';
import {Appareil} from '../models/Appareil';
import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() appareil:Appareil;
@Input() index:number;

  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }
  
  getColor(){
  	if(this.appareil.status === 'allumé'){
  		return 'green';
  	}else{
  		return 'red';
  	}
  }
  onAllumer(){
    this.appareilService.switchOnOne(this.index);
  }
  onEteindre(){
    this.appareilService.switchOnOff(this.index);
  }
  onSwitch(){
    if(this.appareil.status === 'allumé'){
      this.onEteindre();
    }else{
       this.onAllumer();
    }
  }

  getNomButton(){
    if(this.appareil.status === 'allumé'){
      return 'OFF';
    }else{
      return 'ON';
    }
  }


}
