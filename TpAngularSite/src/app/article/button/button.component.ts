import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    NgIf
  ],
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() type: 'prev' | 'next' = 'next'; // Valeur par défaut

  @Output() onClick = new EventEmitter<number>();

  suivant() {
    this.onClick.emit(1);
  }

  precedent() {
    this.onClick.emit(-1);
  }
}
