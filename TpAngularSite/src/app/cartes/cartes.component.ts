import { Component } from '@angular/core';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-cartes',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './cartes.component.html',
  styleUrl: './cartes.component.sass'
})
export class CartesComponent {

}
