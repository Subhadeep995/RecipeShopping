import {Recipe} from './recipes.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class RecipeService{
  recipesChanged=new Subject<Recipe[]>();
   
   private recipes:Recipe[]=[
        new Recipe('Hyderabadi Biryani',
        'The Kachchi biryani is prepared with meat marinated with spices overnight and then soaked in dahi (yogurt) before cooking. The gosht (meat) is sandwiched between layers of fragrant long-grained basmati rice, and cooked on dum (steaming over coals), after sealing the handi (vessel) with dough.',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/The_art_of_%22BIRYANI%22.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient(' Salt',1),
        new Ingredient('Ginger garlic paste',1),
        new Ingredient(' Red chilli paste',1),
        new Ingredient('Green chilli paste ',1),
        new Ingredient('Cardamom powder',1),
        new Ingredient('Cinnamon',3),
        new Ingredient('Cumin seeds',1),
        new Ingredient('Cloves',4),
        new Ingredient('Mace',1),
        new Ingredient('Mint leaves',5),
        new Ingredient('Lemon juice',2),
        new Ingredient('Curd',250),
        new Ingredient('Clarified butter',4),
        new Ingredient('Semi cooked rice',750),
        new Ingredient('Saffron',1),
        new Ingredient('Water',1),
        new Ingredient('Oil',1),
        new Ingredient('Eggs',2),
        new Ingredient('Carrots',2),
        new Ingredient('Cucumbers',2)
      ]),

        new Recipe('Burger King',
        'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, or flame broiled. ... A hamburger topped with cheese is called a cheeseburger.',
        'https://upload.wikimedia.org/wikipedia/commons/6/61/Burger_King_Buck_Double.jpg',
        [
          new Ingredient('Enriched flour',1),
        new Ingredient('water',1),
        new Ingredient('sugar',1),
        new Ingredient('sesame seeds',10),
        new Ingredient('vegetable shortening',1),
        new Ingredient('salt',1),
        new Ingredient('wheat gluten',1),
        new Ingredient('yeast',5),
        new Ingredient('dough',1)
        ])
      ];

      constructor(private slService:ShoppingListService){}

      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes(){
         return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}