import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MisnoticiasComponent } from './misnoticias/misnoticias.component';
import { RegistroComponent } from './registro/registro.component';
import { SeccionesComponent } from './secciones/secciones.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'secciones', component: SeccionesComponent},
  { path: 'misnoticias', component: MisnoticiasComponent},
  { path: 'crearusuario', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
