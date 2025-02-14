import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
    nav: Array<string> = ["Home", "Find a doctor", "Apps", "Testimonials", "About us"];
    pagePrincipale: string = "Home";

  setActiveTab(tab: string): void {
    this.pagePrincipale = tab;
  }
}



