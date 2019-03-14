import { Component, OnInit } from '@angular/core';
import { Tile } from './models/Tiles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  ngOnInit(): void {
    var map = new Map();
    let limit = 35;
    for (let i = 0; i < 16; i++) {
      var rnd;
      do {
        rnd = Math.round(Math.random() * limit + 1);
      } while (map.has(rnd));
      map.set(rnd, 1);
      this.arr1[i] = new Tile(false, rnd, true, 1);
    }
    console.log(this.arr1);
    this.arr2 = this.shuffle(this.arr1);
    console.log(this.arr2);
  }
  onClick(tile: Tile) {
    //on itere toutes les autres tuiles pour voir si une autre du meme signe est retournee
    if (tile.group == 1) {
      for (let i of this.arr2) {
        //si retournee et meme numero et pas trouvée on la retourne pas donc gagné
        if (!i.found && !i.turn && i.assetNumber == tile.assetNumber) {
          i.found = true;
        }
        //on la retourne et on retourne la carte initiale
        else {
          i.turn = true;
          tile.turn = true;
          break;
        }
      }
    }
    else {
      for (let i of this.arr1) {
        //si retournee et meme numero et pas trouvée on la retourne pas donc gagné
        if (!i.found && !i.turn && i.assetNumber == tile.assetNumber) {
          i.found = true;
        }
        //on la retourne et on retourne la carte initiale
        else {
          i.turn = true;
          tile.turn = true;
          break;
        }
      }
    }

    tile.turn = !tile.turn;
  }
  arr1: Tile[] = [];
  arr2: Tile[] = [];



}
