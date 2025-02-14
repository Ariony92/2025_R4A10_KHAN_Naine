import { Component } from '@angular/core';
import {ButtonComponent} from "./button/button.component";
import {ArticleitemsComponent} from "./articleitems/articleitems.component";


export type Temoignages = {
  nom: string,
  status: string,
  message: string,
  image: string,
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ButtonComponent, ArticleitemsComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.sass'
})
export class ArticleComponent {
    compteur = 0

   temoignages =  [{
      nom: "Lego Bonnet",
      status: "Founder Circle",
      message: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.",
      image: "./assets/lego_1.jpg",
    },
     {
       nom: "Lego Mexicano",
       status: "Ex - Christophe Colomb",
       message: "D'abord navigateur et commerçant au Mexique pour Escobar et au service de négociants génois, Ex Christophe Colomb poursuit cette carrière au front des états Unis à partir de 2025 lors de la Réélection de Trump.",
       image: "./assets/lego_2.jpg",
     },
     {
       nom: "Lego Gentlemano",
       status: "Le Tombeur Fou",
       message: "Alicante : Une orange sur la table. Fraîcheur de la nuit. Chaleur de la vie. Jacques Prévert (1900-1977)",
       image: "./assets/lego_3.jpg",
     }
  ]
  changerSlide(direction: number): void {
    this.compteur += direction;

    if (this.compteur < 0) {
      this.compteur = this.temoignages.length - 1;
    }
    if (this.compteur >= this.temoignages.length) {
      this.compteur = 0;
    }
  }
}
