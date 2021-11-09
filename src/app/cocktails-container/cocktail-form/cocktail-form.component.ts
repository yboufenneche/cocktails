import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  // Getter for ingredients
  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  // Create a new FormGroup
  public cocktailForm!: FormGroup;

  // Inject a FormBuilder to create a from
  constructor(private fb: FormBuilder) {}

  //
  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      description: '',
      ingredients: this.fb.array([], Validators.required),
    });
  }

  // Action when we submit the form
  public submit(): void {
    console.log(this.cocktailForm);
  }

  /**
   * addIngredient
   */
  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }
}
