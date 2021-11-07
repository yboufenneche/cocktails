import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent implements OnInit, OnDestroy {
  // selected cocktail in cocktails list
  public selectedCocktail!: Cocktail;

  // list of cocktails
  public cocktails?: Cocktail[];

  // create a new subsciption
  public subscription: Subscription = new Subscription();

  // inject cocktailService via the constructor
  constructor(private cocktailService: CocktailService) {}

  //
  ngOnInit() {
    // get the list of cocktails from the service cocktailService (cocktails$ BehaviorSubject)
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );

    // get the selected cocktail from the service cocktailService (selectedCocktails$ BehaviorSubject)
    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }

  // select a cockatil
  public selectCocktail(index: number) {
    this.cocktailService.selectCocktail(index);
  }

  //
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
