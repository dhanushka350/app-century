import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-codes',
  templateUrl: './project-codes.component.html',
  styleUrls: ['./project-codes.component.scss']
})
export class ProjectCodesComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openProject = function () {
    this.router.navigateByUrl('sales/project-lots');
  };
}
