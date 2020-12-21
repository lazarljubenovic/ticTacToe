import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  public cols: number[][] = [];
  public diagonals: number[][] = [];
  public rows: number[][] = [];
  constructor() {
    this.resetCalc()
  }

  print() {
    this.rows[0][1] = 2;
    alert(this.rows.toString());
  }
  resetCalc() {
    for (let i = 0; i < 2; i++) {
      this.rows[i] = Array(3).fill(0);
      this.cols[i] = Array(3).fill(0);
      this.diagonals[i] = Array(2).fill(0);
    }
  }

  checkWinner(row: number, col: number, nextPl: string) {
    let sign: number = nextPl == "X" ? 0 : 1;

    this.rows[sign][row]++;
    this.cols[sign][col]++;
    if (this.rows[sign][row] == 3 || this.cols[sign][col] == 3) return true;

    if (this.rows[sign][row] == 3 || this.cols[sign][col] == 3) return true;

    if (row == col) this.diagonals[sign][0]++;

    if (row + col == 2) this.diagonals[sign][1]++;

    if (this.diagonals[sign][0] == 3 || this.diagonals[sign][1] == 3)
      return true;

    return false;
  }
}
