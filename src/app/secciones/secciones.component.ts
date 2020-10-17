import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from '../servicios/noticias.service'
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {
  id_seccion: any;
  noticiasList: any;

  constructor(private activateRoute:ActivatedRoute, private router:Router, private noticiaService:NoticiasService) { }




  ngOnInit(): void {

 this.activateRoute
    .queryParams
    .subscribe(params => {
      this.id_seccion = params['idSeccion']
    });

    console.log(this.id_seccion)

    this.getSeccion(this.id_seccion)
    

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
