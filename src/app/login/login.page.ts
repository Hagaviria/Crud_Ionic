import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importa NavController desde @ionic/angular

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private navCtrl: NavController // Inyecta NavController
  ) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      const body = this.loginForm.value;
      const header = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .post('http://localhost:3000/login', body, { headers: header })
        .subscribe((response) => {
          console.log(response);
          this.navCtrl.navigateRoot('/home'); // Utiliza navigateRoot para redirigir y reemplazar la pila de navegación
        });
    }
  }
}
