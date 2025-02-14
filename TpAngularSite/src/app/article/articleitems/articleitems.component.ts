import {Component, Input} from '@angular/core';
import {ArticleComponent, Temoignages} from "../article.component";

@Component({
  selector: 'app-articleitems',
  standalone: true,
  imports: [],
  templateUrl: './articleitems.component.html',
  styleUrl: './articleitems.component.sass'
})
export class ArticleitemsComponent {
  @Input({required:true}) feedback!: Temoignages;
}
