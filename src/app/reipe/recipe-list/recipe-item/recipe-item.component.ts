import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe:Recipe;
  @Output() selectedoutput=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(){
    this.selectedoutput.emit();

  }


}
