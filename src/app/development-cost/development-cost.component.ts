import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-development-cost',
  templateUrl: './development-cost.component.html',
  styleUrls: ['./development-cost.component.scss']
})
export class DevelopmentCostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnBack = function () {
    this.router.navigateByUrl('main/purchasing-costs');
  };

  btnClickNext = function () {
    this.router.navigateByUrl('main/advertising-costs');
  };

}
