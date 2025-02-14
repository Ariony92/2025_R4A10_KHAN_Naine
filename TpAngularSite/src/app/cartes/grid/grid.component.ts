import { Component } from '@angular/core';
import {GridItemsComponent} from './grid-items/grid-items.component';


export type Cards = {
  title: string;
  description: string;
  image: string;
}



@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridItemsComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.sass'
})
export class GridComponent {
  tab: Cards[] = [{
    title: "Search Doctor",
    description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    image: "assets/loop.png",
  },
    {
      title: "ouiiiii",
      description: "",
      image: ""
    },

  ]

}
