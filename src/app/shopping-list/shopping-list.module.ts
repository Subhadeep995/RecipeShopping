import { NgModule } from "../../../node_modules/@angular/core";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormsModule } from "../../../node_modules/@angular/forms";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";


@NgModule({
    declarations:[
        ShoppingListComponent,
    ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{}