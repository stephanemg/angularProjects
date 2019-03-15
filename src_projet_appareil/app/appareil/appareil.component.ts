import { Component, OnInit, Input } from '@angular/core';
import { Appareil } from '../models/appareil';
import { AppareilService } from '../services/AppareilService';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //on recupere les attributs du component
  @Input() appareil: Appareil;
  @Input() index: number;
  //on recupere le service dans le constructeur du component
  constructor(private appareilService: AppareilService) {
  }
  ngOnInit() {
  }
  // recuperation dans directive ngStyle sur appel du component
  getColor() {
    if (this.appareil.appareilStatus == "allumé") {
      return "green";
    }
    else {
      return "red";
    }
  }
  //appel aux methodes par index du service
  onAllumer() {
    this.appareilService.switchOn(this.index);
  }
  onEteindre() {
    this.appareilService.switchOff(this.index);
  }
  getNomButton() {
    if (this.appareil.appareilStatus == "allumé") {
      return "OFF";
    }
    else {
      return "ON";
    }
  }
  onSwitch() {
    if (this.appareil.appareilStatus == "allumé") {
      return this.onEteindre();
    }
    else {
      return this.onAllumer();
    }
  }
}
