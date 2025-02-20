import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../modele/voyage_modele';


@Component({
  selector: 'app-generervoyage',
  standalone: true,
  imports: [],
  templateUrl: './generervoyage.component.html',
  styleUrl: './generervoyage.component.sass'
})
export class GenerervoyageComponent {
  voyageAleatoire: Voyage | null = null;

  constructor(private readonly voyageService: VoyageService, private readonly router: Router) {

  }

  genererVoyage(): void {
    this.voyageAleatoire = this.voyageService.genererVoyageAleatoire();
  }

  validerVoyage(): void {
    if (this.voyageAleatoire !== null) {
      this.voyageService.ajouterVoyage(this.voyageAleatoire);
      this.router.navigate(['/voyages']);
    }
  }

}
