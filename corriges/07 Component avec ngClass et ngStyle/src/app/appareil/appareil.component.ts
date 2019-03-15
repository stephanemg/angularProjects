import { Component, OnInit,Input } from '@angular/core';
import {Appareil} from '../models/Appareil';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() appareil:Appareil;


  constructor() { }

  ngOnInit() {
  }
  
  getColor(){
  	if(this.appareil.status === 'allumé'){
  		return 'green';
  	}else{
  		return 'red';
  	}
  }

}
