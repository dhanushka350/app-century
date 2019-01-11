import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resale-cost',
  templateUrl: './resale-cost.component.html',
  styleUrls: ['./resale-cost.component.scss']
})
export class ResaleCostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnBack = function () {
    this.router.navigateByUrl('advertising-costs');
  };

  btnClickNext = function () {
this.router.navigateByUrl('sales-and-profitability');
  };
}
