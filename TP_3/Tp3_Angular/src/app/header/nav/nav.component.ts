import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  nav: Array<string> = ["Acceuil", "Voyages","Générer Voyage"];
  pagePrincipale: string = "Home";

  setActiveTab(tab: string): void {
    this.pagePrincipale = tab;
  }

  getRoute(element: string): string {
    switch (element) {
      case "Accueil":
        return "/home";
      case "Générer Voyage":
        return "/genererVoyage";
      case "Voyages":
        return "/voyages";
      default:
        return "/home";
    }
  }
}
