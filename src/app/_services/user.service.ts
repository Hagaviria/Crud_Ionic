import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: String = '';

  constructor() { }

  setId(id:String){
    this.id=id;
  }

  getId(){
    return this.id;
  }
}
