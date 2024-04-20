import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.loginForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit() {}

  login() {
    const body = this.loginForm.value;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .post('http://localhost:3000/login', body, { headers: header })
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['./home']);
      });
  }
}
