import { HttpClient } from '@angular/common/http';
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
  content = 'sdf';

  constructor(
    private router: Router,
    private authenticationService: AuthenticateService,
    private http: HttpClient
  ) {
    this.authenticationService.currentUser.subscribe((x) => {
      this.currentUser = x;
      this.username = x.user.toUpperCase();
    });
  }

  ngOnInit(): void {}

  post() {
    console.log(this.content);
    this.http
      .post<any>('http://localhost:3000/blog/post', {
        title: 'title',
        content: this.content,
      })
      .pipe()
      .subscribe(() => {
        console.log('success');
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
