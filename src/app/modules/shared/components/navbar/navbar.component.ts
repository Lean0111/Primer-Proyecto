import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
logueado = true; // variable booleana para el inicio de Registro e Inicio de sesión
deslogueado = false; // Variable booleana para el boton de cerrar sesión

constructor(
  public servicioAuth: AuthService,
  public servivioRutas: Router
){}

//cambia los valores de logueado y deslogueado para ocultar los primeros y mostrar el último
iniciar(){
  this.logueado= false;
  this.deslogueado= true;
}

cerrarSesion(){
this.deslogueado= false;
// va a eliminar el "token" del usuario
// token: estado actual del usuario en el navegador para mantener la sesion abierta
this.servicioAuth.cerrarSesion(); 

this.servivioRutas.navigate(['/']); // redirigimos a la raíz de la página
this.logueado=true;
}

}
