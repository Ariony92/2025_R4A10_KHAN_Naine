import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { LivreAPIService } from '../../services/livreAPI-service';
import {Book} from "../../models/book";
import {take, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  @Output() bookCreated = new EventEmitter<number>();

  livreformulaire: FormGroup;

  constructor(/*private booksInMemoryService: BooksInMemoryService*/  private livreApiService: LivreAPIService, private formulaire: FormBuilder, private route: Router) {
    this.livreformulaire = this.formulaire.group({
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    });
  }

/*ancienne facon avec le 1er service*/
  // onSubmit(): void {
  //   if (this.livreformulaire.valid) {
  //     const newBook = this.booksInMemoryService.createBook(this.livreformulaire.value);
  //     console.log('Livre ajouté', newBook);
  //     this.bookCreated.emit(newBook);
  //     this.livreformulaire.reset();
  //   }
  // }

  onSubmit(): void {
    if (this.livreformulaire.valid) {
      this.livreApiService.createBook(this.livreformulaire.value).pipe(take(1)).subscribe(createdBook => {
        this.bookCreated.emit(createdBook.id);
        this.livreformulaire.reset();
        this.route.navigate(['']);
      });
    }
  }
}

