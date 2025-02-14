import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeMainComponent } from './Hero/home-main.component';
import { CartesComponent } from './cartes/cartes.component';
import { FooterComponent } from './footer/footer.component';
import {ArticleComponent} from "./article/article.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeMainComponent, CartesComponent, FooterComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'TpAngularSite';
}
