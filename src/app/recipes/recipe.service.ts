import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe("first recipe",
    "recipe description","https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"
    ,[ new Ingredient('Fisrt',2),
    new Ingredient('Second',2)]),
    new Recipe("next recipe","recipe 2 description","https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"
    ,[ new Ingredient('Firrt',2),
    new Ingredient('Seceend',8)])
    ];

  constructor(private slService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
