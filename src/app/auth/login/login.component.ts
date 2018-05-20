import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth/auth.service";
import { Router } from "@angular/router";
import { SnackService } from "@common/snack.service";
import { AppService } from "@common/app.service";


export class Auth{
  constructor(public email: string, public password: string){

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    public auth: AuthService, 
    public router: Router, 
    private snackService: SnackService, 
    public appService: AppService) { }

  ngOnInit() {
  }

}
