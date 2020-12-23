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
  public tableMatrix: string[][] = [];
  public turnCounter = 0;
  public winner = false;
  public displayMessage = '';
  public nextPlayer = 'X';

  constructor(private calculationService: CalculationService) {
    this.resetTableMatrix();
  }

  @ViewChildren(CellComponent)
  childCells!: QueryList<CellComponent>;

  resetCells() {
    this.childCells.forEach(c => c.reset());
  }
  disableCells() {
    this.childCells.forEach(c => c.disableCell());
  }
  resetTableMatrix() {
    for (let i = 0; i < 3; i++) {
      this.tableMatrix[i] = Array(3).fill('');
    }
  }
  resetGame($event: any) {
    this.turnCounter = 0;
    this.winner = false;
    this.displayMessage = '';
    this.nextPlayer = 'X';
    this.resetTableMatrix();
    this.resetCells();
  }
  cellIsClicked(row: number, column: number) {
    this.turnCounter++;
    this.tableMatrix[row][column] = this.nextPlayer;
    if (this.turnCounter > 4) {
      const getWinner = this.calculationService.getWinnerIfThereIs(this.tableMatrix, row, column);
      if (getWinner !== 'N') {  // N is returned when there is no winner
        this.winner = true;
        this.displayMessage = 'Winner is ' + this.nextPlayer;
        this.disableCells();
        return;
      }
      if (this.turnCounter === 9) {
        this.winner = true;
        this.displayMessage = 'Its a tie';
        return;
      }
    }
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X';
  }
}



