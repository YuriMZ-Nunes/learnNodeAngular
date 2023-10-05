import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getAvg: number = 0

  setAvg(event: number){
    this.getAvg = event
  }

}
