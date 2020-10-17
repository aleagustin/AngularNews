import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios = []
  contrasena: any
  email:any
  constructor(private router:Router,private usuariosService: UsuariosService) { }

  ngOnInit(): void {
   
  }


  

  getLoginUsers(email,contrasena){
  
  
    

    this.usuariosService.getLogin(email,contrasena).subscribe((res:any) =>{

      
      console.log(res)
      console.log(this.contrasena)
      console.log(this.email)
      console.log("lenght" + this.usuarios.length)
      if(res != null){
        localStorage.setItem("USERCOMPLETO", JSON.stringify(res))
        localStorage.setItem("USER", JSON.stringify(res.token))
        console.log("Usuario logueado correctamente")
        this.router.navigate(['home'])
      }else{
        alert("Error de Autentificación")
        console.log("Error de autentificacion")
      }
    })

  }

  registrarse(){
    this.router.navigate(['crearusuario'])
  }



}
