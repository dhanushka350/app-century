import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  newCustomerPage = function () {
    this.router.navigateByUrl('sales/create-customer');
  };
}
