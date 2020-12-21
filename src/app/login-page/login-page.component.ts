import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import {AuthenticateService} from '../service/authenticate.service'

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hello: String = 'original';
  submitted = false;
  password = '';
  username = '';

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateService) {}

  ngOnInit(): void {

  }

  getData() {
    this.submitted = true;
    console.log(this.username + "" + this.password)

    //this.loading = true;
    this.authenticationService
      .login(this.username, this.password)
      .pipe(first())
      .subscribe(
        (data) => {
          //this.router.navigate([this.returnUrl]);
          console.log("success")
          console.log(data)
        },
        (error) => {
          //this.error = error;
          //this.loading = false;
          console.log(error)
        }
      );
  }
}
