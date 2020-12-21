import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser: any;
  username: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticateService
  ) {
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
      this.username = x.user.toUpperCase();
    });
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
