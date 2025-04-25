import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 

export const routes: Routes = [
 
    {
        path: '',
        loadComponent: () =>{
          return import('./home/home.component').then((m) => m.HomeComponent);
        }
      },

      {
        path: 'division',
        loadComponent: () =>{
          return import('./division/division.component').then((m) => m.DivisionComponent);
        }
      },

      {
        path: 'multiplication',
        loadComponent: () =>{
          return import('./multiplication/multiplication.component').then((m) => m.MultiplicationComponent);
        }
      },
    
    ]    
      