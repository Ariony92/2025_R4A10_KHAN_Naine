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
      title: "Online pharmacy",
      description: "Buy your medicines with our mobile application with a simple delivery system",
      image: "assets/bocalmedoc.png",
    },
    {
      title: "Consultation",
      description: "Free consultation with our trusted doctors and get the best recomendations",
      image: "assets/bocalmedoc.png",
    },
    {
      title: "Details info",
      description: "Free consultation with our trusted doctors and get the best recomendations",
      image: "assets/stats.png",
    },
    {
      title: "Emergency care",
      description: "You can get 24/7 urgent care for yourself or your children and your\n" +
        "lovely family",
      image: "assets/trousse.png",
    },
    {
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      image: "assets/tab.png",
    },

  ]

}
