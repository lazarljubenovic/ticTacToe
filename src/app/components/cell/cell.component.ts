import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as Feather from 'feather-icons';
import { Button } from 'protractor';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  public isClick: boolean = false;
  public btn?: HTMLButtonElement;
  public m: string = "";

  @Input()
  public sign!: string;

  @Output()
  cellClicked = new EventEmitter();

  @ViewChild('btn') buttn!: HTMLButtonElement;

  reset() {
    this.m = ""
    this.isClick = false;
    this.buttn.disabled = false;
  }
  disableCell() {
    this.isClick = true;
    this.buttn.disabled = true;
  }
  refresh() {
    Feather.replace();
  }
  isClicked(): boolean {
    this.refresh()
    return this.isClick;
  }
  isX(): boolean {
    return this.m === "X" ? true : false;
  }
  isO(): boolean {
    return this.m === "O" ? true : false;
  }
  updateCellState($event: any) {
    this.isClick = true;
    this.buttn.disabled = true;
    this.m = this.sign;
    Feather.replace();
    this.cellClicked.emit();
  }

}

/*@HostListener("click", ["$event.target"])
clicked(e: HTMLButtonElement) {
  alert(this.sign);
 // e.disabled = true;
  this.isClick = true;
  Feather.replace();
  this.cellClicked.emit();
}*/
