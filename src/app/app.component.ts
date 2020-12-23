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
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    Feather.replace();
  }
}
