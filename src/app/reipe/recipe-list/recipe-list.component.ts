import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output()  recipeWasSelectedtothechild=new EventEmitter<Recipe>();


recipes:Recipe[]=[new Recipe('A test Recipe',
'This for sample test',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaeBerInV5lh0K1YBHiHFBe0dc6JcU62hk227p_Ff3_pm8sHZN'),
new Recipe('Anothe test Recipe',
'This for anothe sample test',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaeBerInV5lh0K1YBHiHFBe0dc6JcU62hk227p_Ff3_pm8sHZN')];
  
constructor() { }
 ngOnInit() {
  }
  selectedoutput(recipe:Recipe){
   this.recipeWasSelectedtothechild.emit(recipe);

  }
}
