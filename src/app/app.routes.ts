// import { Routes } from '@angular/router';
// import { App } from './app';

// export const routes: Routes = [ 
//     {path:'toto',component:App}, //Eager loading -pages  présentes directement, comme homepage
//     {path:'home',redirectTo:'toto',pathMatch:'full'},// redirection vers 'toto'
//     {path: 'continents', loadComponent:() => import('./components/continents-list/continents-list')
//         .then((component) => component.ContinentsList)}//Lazy loading - Chargées dynamiquement le composant 
// ];
import { Routes } from '@angular/router';
import {Home} from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home }, // Eager loading - Pour les pages présentes directement, comme une homepage.
  { path: 'home', redirectTo: '', pathMatch: 'full'}, // Redirection.
  { path: 'countries', loadComponent: () => import('./components/countries/countries')
      .then((component) => component.Countries), title: 'Countries',
      data: {
    countries: [
  {id: 1, name: 'France'},
  {id: 2, name: 'USA'},
  {id: 3, name: 'Germany'},
  {id: 4, name: 'Spain'}
]
}
  } // Lazy-loading - Charger dynamiquement le composant. Si la route n'est pas activée, le composant n'est pas chargé.
  
];
