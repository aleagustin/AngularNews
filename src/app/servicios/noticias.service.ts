import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class NoticiasService {

  constructor(private http: HttpClient) {

  }

  usuario = JSON.parse(localStorage.getItem("USERCOMPLETO"))
  
  token = localStorage.getItem("USER")
  // Arreglo el token para tenerlo sin comillas
  tokenFinal = this.token.slice(1,-1) 

  headers = new HttpHeaders({"authorization":this.tokenFinal})

  getNoticias() {
   


    return this.http.get("http://localhost:3000/noticias",{headers:this.headers})

  }

  getSecciones(idSeccion) {

    return this.http.get("http://localhost:3000/noticia/seccion/" + idSeccion,{headers:this.headers})

  }

  getNoticiasUsuario() {

    console.log("id usuario>>>>>>> " + this.usuario.usuario.id)
    return this.http.get("http://localhost:3000/noticia/usuario/" + this.usuario.usuario.id,{headers:this.headers})

  }


}
