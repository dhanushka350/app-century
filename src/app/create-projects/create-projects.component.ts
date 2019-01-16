import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.scss']
})
export class CreateProjectsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  btnClickNext = function () {
    this.router.navigateByUrl('/main/purchasing-costs');
  };
}
