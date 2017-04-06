import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	nameInput: string;
	amountInput: number;

	constructor(private listService: ShoppingListService) { }

	ngOnInit() {
	}

	onAddItem() {
		const newIngredient = new Ingredient(this.nameInput, this.amountInput);
		this.listService.addIngredient(newIngredient);
	}

}
