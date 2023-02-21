/*
============================================
, Title: main.ts for in-n-out-books
; Author: Chad ONeal
; Date: 02/02/2023
; Description: main.ts for in-n-out-books
+===========================================
*/

// import statements
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if statement
if (environment.production) {
  enableProdMode();
}

// dynamic content
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
