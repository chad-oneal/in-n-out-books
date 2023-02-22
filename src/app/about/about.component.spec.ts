/*
============================================
, Title: about.component.spec.ts
; Author: Chad ONeal
; Date: 02/02/2023
; Description: about.component.spec.ts
+===========================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

// description and declaration of variables
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
