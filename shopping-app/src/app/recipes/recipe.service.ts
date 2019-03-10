import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes:Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1'),
    new Recipe('A test recipe2', 'test', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2017%2F08%2FAvocado-Shrimp-Salsa-Recipe-4.jpg&f=1')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
