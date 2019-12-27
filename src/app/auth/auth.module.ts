import { NgModule } from "../../../node_modules/@angular/core";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
    declarations:[
        SigninComponent,
        SignupComponent,
        ForgetPasswordComponent
    ],
    imports:[
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}