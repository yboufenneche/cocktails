import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.scss'],
})
export class CocktailsContainerComponent implements OnInit {
  // list of cocktails
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
  ];
  public selectedCocktail: Cocktail = this.cocktails[0];
  constructor() {}

  ngOnInit(): void {}
}
