import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {email: '', password: ''}
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login = function () {
    this.router.navigateByUrl('landing');
  };
}
