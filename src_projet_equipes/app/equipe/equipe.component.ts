import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from '../models/Equipe';
import { EntrepriseService } from '../services/EntrepriseService';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  @Input() index: number;
  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
  }
  onDelete() {
    this.entrepriseService.deleteEquipe(this.index);
  }
  onDeletePersonne(idPersonne) {
      this.entrepriseService.retirePersonneEquipe(this.equipe, idPersonne);
  }
}
