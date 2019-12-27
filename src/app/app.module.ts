import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
