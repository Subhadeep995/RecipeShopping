import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from '../../../node_modules/rxjs';
import { trigger, state, style, transition, animate, group } from '../../../node_modules/@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations:[
    trigger('list', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
  ]
)]
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private subscription:Subscription;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.subscription=this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) =>{
        this.ingredients=ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
  
}
