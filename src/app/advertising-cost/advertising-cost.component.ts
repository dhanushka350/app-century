import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advertising-cost',
  templateUrl: './advertising-cost.component.html',
  styleUrls: ['./advertising-cost.component.scss']
})
export class AdvertisingCostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnBack = function () {
    this.router.navigateByUrl('development-costs');
  };

  btnClickNext = function () {
    this.router.navigateByUrl('resale-costs');
  };
}
