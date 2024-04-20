import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listado!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private navCtrl: NavController,
    private user: UserService
  ) {}
  ngOnInit(): void {
    this.BuscarDatos();
  }

  BuscarDatos() {
    // Coloca aquí la lógica para recargar los datos que necesitas
    this.http.get('http://localhost:3000/records').subscribe((snap) => {
      console.log(snap);
      this.listado = snap;
    });
  }
}
