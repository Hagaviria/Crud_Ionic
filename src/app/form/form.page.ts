import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  datos: any = {
    code: '',
    name: '',
    subject: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  save() {
    this.http.post('http://localhost:3000/records', this.datos).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al guardar los datos:', error);
      },
    });
  }
}
