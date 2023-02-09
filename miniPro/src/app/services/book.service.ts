import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[]=[{title:"bookTitle",content:"bookContent"},{title:"bookTitle2",content:"bookContent2"}]

  constructor() { }

  getAllBooks(){
    return this.books
  }

}
