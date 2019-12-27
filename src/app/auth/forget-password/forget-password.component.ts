import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onResetPassword(form:NgForm){
    const email=form.value.email;
    
    this.authService.resetPassword(email);
  }

}
