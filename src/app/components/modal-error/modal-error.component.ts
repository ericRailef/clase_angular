import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  standalone: true,
  imports: [],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.css'
})
export class ModalErrorComponent {

  @Input() mensaje: string = '';
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }
}