import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;

  /*  Inject CocktailService, PanierService and ActivatedRoute
   ** to this component via the constructor
   */
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktail = this.cocktailService.getCocktail(
      +activatedRoute.snapshot.paramMap.get('index')!
    );
  }

  //
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  // add the ingredient of the current cocktail to the cart (to the service Panier)
  public addToPanier() {
    if (this.cocktail) {
      this.panierService.addPanier(this.cocktail.ingredients);
      console.log(this.panierService.ingredients$.value);
    }
  }
}
