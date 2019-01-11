import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purchasing-costs',
  templateUrl: './purchasing-costs.component.html',
  styleUrls: ['./purchasing-costs.component.scss']
})
export class PurchasingCostsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnBack = function () {
    this.router.navigateByUrl('create-new');
  };

  btnClickNext = function () {
    this.router.navigateByUrl('development-costs');
  };

}
