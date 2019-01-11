import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sales-and-profitability',
  templateUrl: './sales-and-profitability.component.html',
  styleUrls: ['./sales-and-profitability.component.scss']
})
export class SalesAndProfitabilityComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  brnBack = function () {
    this.router.navigateByUrl('resale-costs');
  };

  previewDetails = function () {
    this.router.navigateByUrl('preview-before-approval');
  };
}
