import {Component, OnInit} from '@angular/core';
import {Voyage} from "../modele/voyage_modele";
import {ActivatedRoute, Router} from "@angular/router";
import {VoyageService} from "../services/voyage.service";

@Component({
  selector: 'app-voyagedetail',
  standalone: true,
  imports: [],
  templateUrl: './voyagedetail.component.html',
  styleUrl: './voyagedetail.component.sass'
})
export class VoyagedetailComponent implements OnInit {
  voyage!: Voyage;
  popUpSupp = false;
  voyageASupprimer: Voyage | null = null;

  constructor(private readonly route: Router, private readonly voyageService: VoyageService, private readonly activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id)!;
      if (!this.voyage) {
        this.route.navigate(['/404']);
      }
    }

  }

  ouvrirPopUp(id: string): void {
    const voyageTrouve = this.voyageService.getVoyageById(id);

    if (voyageTrouve) {
      this.voyageASupprimer = voyageTrouve;
    } else {
      this.voyageASupprimer = null;
    }

    this.popUpSupp = true;
  }




  fermerPopUp() {
    this.popUpSupp = false;
    this.voyageASupprimer = null;
  }

  supprimerVoyage(): void {
    if (this.voyageASupprimer !== null) {
      if (this.voyageASupprimer.id) {
        this.voyageService.supprimerVoyage(this.voyageASupprimer.id);
        this.fermerPopUp();
        this.route.navigate(['/voyages']);
      }
    }
  }

}
