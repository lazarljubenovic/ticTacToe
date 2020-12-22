import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  public numbers = Array(3).fill(0);
  public counter: number = 0;
  public winner: boolean = false;
  public displayMessage: string = "";
  public nextPlayer: string = "X";

  constructor(private calculation_Service: CalculationService) {
    this.calculation_Service.resetCalc();
  }

  @ViewChildren(CellComponent)
  childCells!: QueryList<CellComponent>;

  resetCells() {
    this.childCells.forEach(c => c.reset());
  }
  disableCells() {
    this.childCells.forEach(c => c.disableCell());
  }

  resetGame($event: any) {
    this.counter = 0;
    this.winner = false;
    this.displayMessage = ""
    this.nextPlayer = "X"
    this.resetCells();
    this.calculation_Service.resetCalc();
  }
  cellIsClicked(row: number, column: number) {
    this.counter++
    if (this.calculation_Service.checkWinner(row, column, this.nextPlayer)) {
      alert("imamo pobednika");
      this.winner = true;
      this.displayMessage = "Winner is " + this.nextPlayer
      this.disableCells();
      return;
    }
    if (this.counter == 9) {
      alert("tie")
      this.winner = true;
      this.displayMessage = "Its a tie"
      return;
    }
    this.nextPlayer = this.nextPlayer === "X" ? "O" : "X";
  }
}



