import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

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
    $('.ui.basic.modal')
      .modal('show')
    ;
    /* this.router.navigateByUrl('development-costs');*/
  };

}
