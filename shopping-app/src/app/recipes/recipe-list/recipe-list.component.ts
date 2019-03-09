import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1'),
    new Recipe('A test recipe2', 'test', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
