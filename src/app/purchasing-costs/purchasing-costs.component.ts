import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-purchasing-costs',
  templateUrl: './purchasing-costs.component.html',
  styleUrls: ['./purchasing-costs.component.scss']
})

export class PurchasingCostsComponent implements OnInit {
  closeResult: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnBack = function () {
    this.router.navigateByUrl('main/create-new');
  };

  btnClickNext = function () {
    this.router.navigateByUrl('main/development-costs');
  };

}
