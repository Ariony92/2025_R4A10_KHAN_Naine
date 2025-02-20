import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VoyagesComponent } from "./voyages/voyages.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {VoyagedetailComponent} from "./voyagedetail/voyagedetail.component";
import {GenerervoyageComponent} from "./generervoyage/generervoyage.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'voyages',
    component: VoyagesComponent,
  },
  {
    path: 'voyages/:id',
    component: VoyagedetailComponent
  },
  {
    path: 'genererVoyage',
    component: GenerervoyageComponent
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
]
