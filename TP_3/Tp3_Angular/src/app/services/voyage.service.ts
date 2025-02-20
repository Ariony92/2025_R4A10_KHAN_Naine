import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX, IMAGES } from '../data';
import { Voyage } from "../modele/voyage_modele";

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.initialiserVoyages();
  }


  initialiserVoyages(): void {
    for (let i = 0; i < 20; i++) {
      this.voyages.push(this.genererVoyageAleatoire());
    }
  }


  getVoyages(): Voyage[] {
    return this.voyages;
  }


  supprimerVoyage(id: string): void {
    this.voyages = this.voyages.filter(v => v.id !== id);
  }

  ajouterVoyage(nouveauVoyage: Voyage): void {
    this.voyages.push(nouveauVoyage);
  }


  genererVoyageAleatoire(): Voyage {
    let id = Math.floor(Math.random() * 100000).toString();
    let index = Math.floor(Math.random() * DESTINATIONS.length);
    return {id, destination: DESTINATIONS[index], description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)], prix: PRIX[Math.floor(Math.random() * PRIX.length)], image: IMAGES[index]};
  }


  getVoyageById(id: string): Voyage | null {
    for (const voyage of this.voyages) {
      if (voyage.id === id) {
        return voyage;
      }
    }
    return null
  }
}
