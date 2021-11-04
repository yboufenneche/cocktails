import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails?: Cocktail[];
  @Output() private selectedCocktail: EventEmitter<number> = new EventEmitter();

  //
  public selectCocktail(index: number): void {
    this.selectedCocktail.emit(index);
  }

  //
  constructor() {}

  //
  ngOnInit(): void {}
}
