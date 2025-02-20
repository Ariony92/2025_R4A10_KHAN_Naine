import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-voyages',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './voyages.component.html',
  styleUrl: './voyages.component.sass'
})
export class VoyagesComponent {

}
