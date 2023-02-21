/*
============================================
, Title: book.service.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: book.service.ts for in-n-out-books
+===========================================
*/

// import statement
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


// injectable
@Injectable({
  providedIn: 'root'
})

// export statement
export class BooksService {

    isbns: Array<string> = [
      '0345339681',
      '0261103571',
      '9780593099322',
      '9780261102361',
      '9780261102378',
      '9780590302715',
      '9780316769532',
      '9780743273565',
      '9780590405959'
    ];

    // connection to https://openlibrary.org/api/books
    constructor(private http: HttpClient) {  }

    getBooks() {
      let params = new HttpParams();

      params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
      params = params.append('format', 'json');
      params = params.append('jscmd', 'details');
      return this.http.get('https://openlibrary.org/api/books', {params: params})
    }
  }

