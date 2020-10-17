import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service'
import { NoticiasService } from '../servicios/noticias.service'
import { Router } from '@angular/router'
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

usuariosList = []

  email:any
  noticiasList: any;
  constructor(private usuarioService: UsuariosService, private noticiaService: NoticiasService,private router:Router) { }

  //El onInit sirve para cargar apenas entramos es uno de los ciclos de vida de angular
  ngOnInit(): void {
  this.getNoticias()
  }

 

/**
 * Esta función lo que hace es subscribirse al metodo del serivicio
 */

 /* getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe( (res: any ) => {
      console.log(res);
      this.usuariosList = res;
    });
  }*/

  getNoticias(){
    this.noticiaService.getNoticias(/*localStorage.getItem("USER")*/).subscribe((res:any) =>{
      console.log(res)
      this.noticiasList = res;
    })
  }


  goSeccion(id){
    this.router.navigate(['secciones'] , { queryParams: { idSeccion: id } })
  }

  getSeccion(id){
    this.noticiaService.getSecciones(id).subscribe((res:any) => {
      console.log(res)
      this.noticiasList = res
    })
  }
  

  goHome(){
    this.router.navigate(['home'])
  }

  goMisNoticias(){
    this.router.navigate(['misnoticias'])
  }


}
