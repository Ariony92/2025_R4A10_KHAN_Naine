import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {VoyagesComponent} from "./voyages/voyages.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'voyages',
    component: VoyagesComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },




];
