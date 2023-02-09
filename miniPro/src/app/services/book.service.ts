import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[]=[{title:"bookTitle",content:"bookContent"}]

  constructor() { }

}
