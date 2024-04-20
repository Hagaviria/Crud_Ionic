import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listado!: any[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.buscarDatos();
  }

  buscarDatos() {
    this.http.get<any[]>('http://localhost:3000/records').subscribe(
      (data) => {
        console.log(data);
        this.listado = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  eliminar(codigo: string) {
    this.http.delete(`http://localhost:3000/records/${codigo}`).subscribe({
      next: (response) => {
        console.log('Deleted:', response);
        this.buscarDatos();
      },
      error: (error) => {
        console.error('Error deleting record:', error);
      },
    });
  }
}
