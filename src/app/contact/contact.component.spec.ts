/*
============================================
, Title: contact.component.spec.ts
; Author: Chad ONeal
; Date: 01/11/2023
; Description: contact.component.spec.ts
+===========================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

// description and declaration of variables
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
