import { NgModule } from "../../node_modules/@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";


const appRouts:Routes=[
    {path: '', component:HomeComponent},
    {path:'recipes',loadChildren: './recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', component:ShoppingListComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRouts,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class    AppRoutingModule{

}