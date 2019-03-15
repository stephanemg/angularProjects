import { Component, OnInit,Input } from '@angular/core';
import { Equipe} from '../models/Equipe';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
@Input() equipe:Equipe;
  constructor() { }

  ngOnInit() {
  }

}
