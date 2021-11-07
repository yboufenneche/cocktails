import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/interfaces/ingredient.interface';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  // list of the ingredients in the cart
  public ingredients?: Ingredient[] | null = null;

  // subscription to list of ingredients of the service
  public subscription: Subscription = new Subscription();

  // inject the service Panier
  constructor(private panierService: PanierService) {}

  // ngOnInit implementation
  ngOnInit() {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        (ingredients: Ingredient[] | null) => (this.ingredients = ingredients)
      )
    );
    console.log('...');

    console.log(this.ingredients);
  }

  // ngOnDestroy implementation
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
