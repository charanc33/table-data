import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';
import { moveEmbeddedView } from '@angular/core/src/view';
import { add } from 'ngx-bootstrap/chronos/public_api';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(   public translate: TranslateService ,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params => {
            let browserLang = params['lang'];
            console.log(browserLang); // Print the parameter to the console.         
this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        });// in side html whenre you write username or password at there replace like this  {{ 'TITLE.USERNAME' | translate}}
  


  }
  // getCarInfo() {
  //   let sum = 0;
  //   this.ipl.forEach(element => {
  //     sum = sum + element;
  //   });
  //   return sum;
  // }
  // getMovieInfo() {
  //   let addition = 0;
  //   // return Object.keys(this.movie);
  //   Object.keys(this.movie).forEach(element => {
  //     if (!isNaN(this.movie[element])) {
  //       addition += this.movie[element]
  //     }
  //   });


  // }



}
