import { Component, Output } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  
  //public startingPlayer:string= "X";
  
  ngAfterViewInit() {
    Feather.replace();
  }
}
