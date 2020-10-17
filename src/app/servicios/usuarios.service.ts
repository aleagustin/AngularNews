import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { 

    
    
  }

  getUsuarios(){    
    return this.http.get("http://localhost:3000/usuarios")
  }

  getLogin(email,contrasena){

    return this.http.post("http://localhost:3000/login",{'email': email, 'contrasena': contrasena})
  }

  nuevoUsuario(email,contrasena){

    return this.http.post("http://localhost:3000/create/usuario",{'email': email, 'contrasena': contrasena})

  }





}
