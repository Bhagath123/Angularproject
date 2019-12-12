import { Ingredients } from './../../shared/ingridient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredients>();


  constructor() { }

  ngOnInit() {
  }
  addItem(){
       const amountref= this.amountInputRef.nativeElement.value;
       const nameRef=this.nameInputRef.nativeElement.value;
       const Ingredient=new Ingredients(nameRef,amountref);
       this.ingredientAdded.emit(Ingredient);
        }
}
