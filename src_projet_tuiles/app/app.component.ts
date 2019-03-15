import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Tile } from './models/Tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shuffle(a: Tile[]) {
    let a2 = a.slice();
    let arr3: Tile[] = [];
    for (let i = a2.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a2[i], a2[j]] = [a2[j], a2[i]];
    }
    for (let k in a2) {
      arr3[k] = new Tile(false, a2[k].assetNumber, true, 2);
    }
    return arr3;
  }
  onClick(tile: Tile) {
    tile.turn = !tile.turn;
    if (tile.group == 1) {
      this.evaluateClick(tile, this.tiles2);
      this.turnCardsGroup(tile, this.tiles1);
    }
    else {
      this.evaluateClick(tile, this.tiles1);
      this.turnCardsGroup(tile, this.tiles2);
    }
  }
  private turnCardsGroup(tile, tiles) {
    for (let i of tiles) {
      if (i.turn == false && i.assetNumber != tile.assetNumber && i.found == false) {
        i.turn = true;
      }
    }
  }
  private onTriche() {
    for (let i of this.tiles1) {
        i.turn = false;
    }
    for (let i of this.tiles2) {
      i.turn = false;
  }
  }
  private evaluateClick(tile: Tile, tiles) {
    //on recherche si une tuile dans le groupe 2 est decouverte
    for (let i of tiles) {
      if (i.turn == false && i.found == false) {
        //si c'est la meme tuile, elles sont toutes les 2 trouvées
        if (i.assetNumber == tile.assetNumber) {
          //gagné
          i.found = true;
          tile.found = true;
        }
        else {
          //perdu on retourne la tuile de l'autre coté
          i.turn = true;
        }
      }
    }

  }

  ngOnInit(): void {
    var map = new Map();
    let tilesLimit = 37;
    for (let i = 0; i <= 15; i++) {
      let rnd;
      do {
        rnd = Math.round(Math.random() * tilesLimit);
      } while (map.has(rnd));
      map.set(rnd, 1);
      this.tiles1[i] = new Tile(false, rnd, true, 1);
    }
    this.tiles2 = this.shuffle(this.tiles1);
    console.log(this.tiles2);
  }
  tile: Tile;
  tiles1: Tile[] = [];
  tiles2: Tile[] = [];
  arr1: any[] = [];
  arr2: any[] = [];



}
