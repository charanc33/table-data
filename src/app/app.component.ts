import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { moveEmbeddedView } from '@angular/core/src/view';
import { add } from 'ngx-bootstrap/chronos/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LoginApp';
  car = {
    brand: 'toyota',
    color: 'white',
    price: '2lcs',
    milage: 3450
  };
  movie =
    {
      hero: 'mahesh',
      count: 389,
      year: 1990
    };
  ipl = [140, 645, 975, 345];
  team = ['csk', 'dc', 'mumbai', 'kkr', 'srh'];
  constructor() {
    const res = this.getCarInfo();
    console.log(res);
    const movres = this.getMovieInfo();
    console.log(movres);


  }
  getCarInfo() {
    let sum = 0;
    this.ipl.forEach(element => {
      sum = sum + element;
    });
    return sum;
  }
  getMovieInfo() {
    let addition = 0;
    // return Object.keys(this.movie);
    Object.keys(this.movie).forEach(element => {
      if (!isNaN(this.movie[element])) {
        addition += this.movie[element]
      }
    });


  }



}
