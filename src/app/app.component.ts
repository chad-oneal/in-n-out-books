/*
============================================
, Title: app.component.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: for in-n-out-books
+===========================================
*/

// import statement
import { Component } from '@angular/core';

// tells which css & html files to usse
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export statement
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books";
  }
}
