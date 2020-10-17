import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-misnoticias',
  templateUrl: './misnoticias.component.html',
  styleUrls: ['./misnoticias.component.scss']
})
export class MisnoticiasComponent implements OnInit {

  noticiasList: any
  usuario: any

  constructor(private noticiasService: NoticiasService, private router:Router) { 

     this.usuario =  JSON.parse(localStorage.getItem("USER"))
  }

  ngOnInit(): void {

    this.goMisNoticias()

  }


  goMisNoticias(){

    if(this.usuario != null){
    this.noticiasService.getNoticiasUsuario().subscribe((res) =>{
     this.noticiasList = res
   })

  }else{
    alert("No te has logeado!!")
  }
  }

  goHome(){
    this.router.navigate(['home'])
  }



  goSeccion(id){
    this.noticiasService.getSecciones(id).subscribe((res:any) => {
      console.log(res)
      this.noticiasList = res
    })
  }

}
