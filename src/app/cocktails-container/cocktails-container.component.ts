import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CocktailService } from '../shared/cocktail.service';
import { Cocktail } from '../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent implements OnInit, OnDestroy {
  // list of cocktails
  public cocktails?: Cocktail[];

  // selected cocktail in cocktails list
  public selectedCocktail!: Cocktail;

  // create a new subsciption
  public subscription: Subscription = new Subscription();

  // inject cocktailService via the constructor
  constructor(private cocktailService: CocktailService) {}

  // change the selected cocktail
  public changeCocktail(index: number): void {
    // this.selectedCocktail = this.cocktails[index];
  }

  //
  ngOnInit(): void {
    // get the list of cocktails from the service cocktailService (cocktails$ BehaviorSubject)
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails: Cocktail[]) => (this.cocktails = cocktails)
      )
    );

    // get the selected cocktail from the service cocktailService (selectedCocktails$ BehaviorSubject)
    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail) =>
          (this.selectedCocktail = selectedCocktail)
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
