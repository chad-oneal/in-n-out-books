/*
============================================
, Title: contact.component.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: contact.component.ts
+===========================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

// export statement
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
