import { Routes } from '@angular/router';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { CocktailDetailsComponent } from './cocktails-container/cocktail-details/cocktail-details.component';

//
export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailsContainerComponent,
    children: [
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent },
];