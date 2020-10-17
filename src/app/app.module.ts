import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SeccionesComponent } from './secciones/secciones.component';
import { MisnoticiasComponent } from './misnoticias/misnoticias.component';
import { RegistroComponent } from './registro/registro.component'
//import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SeccionesComponent,
    MisnoticiasComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    //CommonModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
