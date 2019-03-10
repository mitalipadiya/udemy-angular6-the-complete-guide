import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe('Sandwitch',
    'Enjoy the stuff between two breads',
    'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1',
    [new Ingredient("Bread",2),
  new Ingredient("salad",4)]),
    new Recipe('Burger',
    "Don't forget to try it",
    'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1',
  [new Ingredient("Bun", 2),
new Ingredient("Vegetables",5)])
  ];
  constructor(private slService : ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }
addIngredientsToShoppingList(ingredients : Ingredient[]){
  this.slService.addIngredients(ingredients);
}
}
