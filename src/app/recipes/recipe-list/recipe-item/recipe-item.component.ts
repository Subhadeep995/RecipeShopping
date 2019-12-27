import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { Http } from '../../../../../node_modules/@angular/http';
import { RecipeService } from '../../recipe.service';
import { map } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input()index:number;
  constructor(private http:Http,private recipeService:RecipeService){}
  ngOnInit() {
   // this.http.get('assets/recipe.json').pipe(map((response:Response) => response.json()))
   // .subscribe(
    //    (recipes:Recipe[]) => {
            
     //       this.recipeService.setRecipes(recipes);
     //   }
    //);
  }
  

}
