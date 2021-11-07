import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  // inject PanierService to this component via the constructor
  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  // add the ingredient of the current cocktail to the cart (to the service Panier)
  public addToPanier() {
    if (this.cocktail) {
      this.panierService.addPanier(this.cocktail.ingredients);
      console.log(this.panierService.ingredients$.value);
    }
  }
}
