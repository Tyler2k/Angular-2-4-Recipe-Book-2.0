import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe', 
			'This is a test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),	
		new Recipe(
			'Another Test Recipe', 
			'This is a test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];

	constructor(private listService: ShoppingListService) {

	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientToList(ingredients: Ingredient[]) {
		this.listService.addIngredients(ingredients);
	}
}