import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../modele/voyage_modele';
import {SlicePipe} from "@angular/common";
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-voyages',
  standalone: true,
  imports: [RouterLink, SlicePipe,  CommonModule],
  templateUrl: './voyages.component.html',
  styleUrl: './voyages.component.sass'
})
export class VoyagesComponent implements OnInit {
  voyages!: Voyage[];
  compteur =  0;
  voyagesParPage =20
  popUpSupp = false;
  voyageASupprimer: Voyage | null = null;

  constructor(private readonly voyageService: VoyageService, private readonly router: Router) {
  }

  ngOnInit() {
    this.voyages=this.voyageService.getVoyages();
    if(!this.voyages){
      this.router.navigate(['/404'])
    }

  }
  ouvrirPopUp(id: string) {
    const voyage = this.voyages.find(v => v.id === id);

    if (voyage) {
      this.voyageASupprimer = voyage;
    } else {
      this.voyageASupprimer = null;
    }

    this.popUpSupp = true;
  }



  fermerPopUp() {
    this.popUpSupp = false;
    this.voyageASupprimer = null;
  }


  supprimerVoyage() {
    if (this.voyageASupprimer !== null) {
      this.voyageService.supprimerVoyage(this.voyageASupprimer.id);
      this.voyages = this.voyageService.getVoyages();
      this.fermerPopUp();
    } else {
      this.fermerPopUp();
    }
  }

  changerPage(direction: number) {
    let nouvelleValeur =this.compteur+(direction * this.voyagesParPage);

    if (nouvelleValeur >= 0&& nouvelleValeur < this.voyages.length) {
      this.compteur=nouvelleValeur;
    }
  }










}
