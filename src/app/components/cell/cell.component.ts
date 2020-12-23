import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as Feather from 'feather-icons';
import { Button } from 'protractor';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  public isClick = false;
  public currentPlayer = ''; // X or O

  @Input()
  public sign!: string;

  @Output()
  cellClicked = new EventEmitter();

  @ViewChild('buttonCell') button!: HTMLButtonElement;

  reset() {
    this.currentPlayer = '';
    this.isClick = false;
    this.button.disabled = false;
  }
  disableCell() {
    this.isClick = true;
    this.button.disabled = true;
  }
  refresh() {
    Feather.replace();
  }
  isClicked(): boolean {
    this.refresh();
    return this.isClick;
  }
  isX(): boolean {
    return this.currentPlayer === 'X' ? true : false;
  }
  isO(): boolean {
    return this.currentPlayer === 'O' ? true : false;
  }
  updateCellState($event: any) {
    this.isClick = true;
    this.button.disabled = true;
    this.currentPlayer = this.sign;
    Feather.replace();
    this.cellClicked.emit();
  }
}
