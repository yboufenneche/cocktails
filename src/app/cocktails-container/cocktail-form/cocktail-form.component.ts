import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  // Cocktail to be edited
  public cocktail?: Cocktail;

  // Create a new FormGroup
  public cocktailForm: FormGroup = this.initForm();
  /**
   * Getter for ingredients
   */
  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }
  /**
   * Dependency injection
   */
  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  /**
   * Intialize the cocktail to be edited.
   * We get the Id from the url by subscribing to ActivatedRoute.paramMap
   */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktail = this.cocktailService.getCocktail(+index);
        this.cocktailForm = this.initForm(this.cocktail);
      }
    });
  }
  /**
   * Inititialize the fields of the form with a cocktail
   */
  private initForm(
    cocktail: Cocktail = { name: '', description: '', img: '', ingredients: [] }
  ): FormGroup {
    return this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }
  /**
   * Add ingredient
   */
  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  /**
   * Action when we submit the form:
   * Add the content of the form as a cocktail to the cocktailSerce's cocktails,
   * and redirect the user to /cocktails url
   */
  public submit(): void {
    if (this.cocktail) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
