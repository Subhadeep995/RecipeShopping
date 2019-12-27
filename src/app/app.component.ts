import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { Http } from '../../node_modules/@angular/http';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:Http,private recipeService:RecipeService) { }
loadedFeature='recipe';

onNavigate(feature:string){
    this.loadedFeature=feature;
    }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAHjV8fk85lSa2a0TQhFOApHOtvECtdbUE",
    authDomain: "ng-recipe-book-abd2a.firebaseapp.com"
    });
   
  }
}
