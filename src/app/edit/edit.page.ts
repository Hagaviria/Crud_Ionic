import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  listado!:any;
  id: String = '';
  datos: any = {
    nombre:'',
    correo:'',
    universidad:''
  }

  constructor(private http: HttpClient, private user: UserService) {
    this.id = user.getId();
    this.http.get("http://localhost/IonicApi/src/controllers/consultarbyId.php?id="+this.id).subscribe(snap =>{
        console.log(snap);
        this.listado=snap;
      });
   }

  ngOnInit() {
  }

  editar(){
    this.http.get("http://localhost/IonicApi/src/controllers/editar.php?nombre="+this.datos.nombre+"&correo="+this.datos.correo+
    "&universidad="+this.datos.universidad+"&id="+this.id).subscribe(snap =>{
      console.log(snap);
    });
  }

}
