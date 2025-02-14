import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  footerSections = [
    {
      title: 'Company',
      links: ['About', 'Testimonials', 'Find a doctor', 'Apps']
    },
    {
      title: 'Region',
      links: ['Indonesia', 'Singapore', 'Hongkong', 'Canada']
    },
    {
      title: 'Help',
      links: ['Help center', 'Contact support', 'Instructions', 'How it works']
    }
  ];
}
