import { Component, Input} from '@angular/core';
import { GridComponent ,Cards } from '../grid.component'

@Component({
  selector: 'app-grid-items',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './grid-items.component.html',
  styleUrl: './grid-items.component.sass'
})
export class GridItemsComponent {
  @Input({required: true}) cards!: Cards;
}
