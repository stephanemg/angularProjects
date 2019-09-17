import { Component, OnInit } from "@angular/core";
import { Cases as Case } from "./models/Case";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "tictactoe";
  cases: Case[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.cases[i] = new Case(i, false, 0);
    }
  }
  onClick(case2: Case) {
    case2.turn = true;
    case2.type = 1;
    //l'ia joue le coup suivant ;-)
    this.playNext(case2);
  }
  private playNext(case2: Case) {
    const casesF = this.cases.filter(case3 => case3.turn === false);
    const j = Math.floor(Math.random() * casesF.length);
    casesF[j].turn = true;
    casesF[j].type = 2;
  }
}
