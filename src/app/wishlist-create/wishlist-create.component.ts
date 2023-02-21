/*
============================================
, Title: wishlist-create.component.spec.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: wishlist-create.component.spec.ts
+===========================================
*/

// import statements
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

// tells which css and html files to use
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})

// export statement
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  // add items to wishlist
  addItem() {
    console.log('Inside wishlist-create.component.ts (child) - addItem() function');
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}
