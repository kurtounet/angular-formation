import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
 
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';


registerLocaleData(localeFr)   

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
   { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
};
