import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,  NavbarComponent, InicioComponent, FormularioComponent, ModalErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  vista: string = 'inicio';
  mensajeError: string = '';

  cambiarVista(vista: string) {
    this.vista = vista;
  }

  mostrarError(mensaje: string) {
    this.mensajeError = mensaje;
  }
}
