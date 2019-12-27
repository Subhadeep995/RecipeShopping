import { Injectable } from "../../../node_modules/@angular/core";
import { Http,Response } from "../../../node_modules/@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipes.model";
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
    constructor(private http:Http,private recipeService:RecipeService,private authService:AuthService){}

    storeRecipes(){
        const token=this.authService.getToken();
        return this.http.put('https://ng-recipe-book-abd2a.firebaseio.com/recipes.json?auth=' +token,this.recipeService.getRecipes());
        //return this.http.get('/app/assets/recipe.json').map((response:Response) => response.json());
    }

    getRecipes(){
        
        const token=this.authService.getToken();
        this.http.get('https://ng-recipe-book-abd2a.firebaseio.com/recipes.json?auth=' +token)
        .pipe(map(
            (response:Response) =>{
                const recipes:Recipe[]=response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes:Recipe[]) => {
                
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}