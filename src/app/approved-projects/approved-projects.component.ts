import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-approved-projects',
  templateUrl: './approved-projects.component.html',
  styleUrls: ['./approved-projects.component.scss']
})
export class ApprovedProjectsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnClickNext = function () {
    this.router.navigateByUrl('create-land-sale-profile');
  };
}
