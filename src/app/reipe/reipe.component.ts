import { Recipe } from './recipe.model';
import { Component } from '@angular/core';

@Component({
    selector:'app-recipe',
    templateUrl:'reipe.component.html',
    styleUrls:['reipe.component.css']
})
export class RecipeComponent{
    selectedRecipe:Recipe;

}