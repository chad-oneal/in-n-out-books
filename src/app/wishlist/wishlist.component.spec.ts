/*
============================================
, Title: bok-list.component.spec.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: book-list.component.spec.ts
+===========================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistComponent } from './wishlist.component';

// description and declaration of variables
describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
