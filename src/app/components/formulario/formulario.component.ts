import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nombre: string = '';

  @Output() error = new EventEmitter<string>();

  enviar() {
    if (this.nombre.trim() === '') {
      this.error.emit('El nombre es obligatorio');
    } else {
      alert('Formulario enviado: ' + this.nombre);
    }
  }
}
