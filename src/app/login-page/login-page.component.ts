import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hello : String = "original";

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  getData(){
    this.http.get("http://localhost:3000/api").subscribe(response => {
      this.hello = response['data']
    }, error =>{
      console.log(error)
    }
    )
  }

}
