import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  email: any
  contrasena: any

  constructor() { }

  ngOnInit(): void {
  }



  guardarUsuario(email,contrasena){


  }


}
