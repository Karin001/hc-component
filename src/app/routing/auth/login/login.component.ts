import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/auth/login.service';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
export interface LoginInfo {
  id: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password_hide = true;
  loginPending = false;
  loginInfo: LoginInfo = {
    id: '',
    password: ''
  }
  constructor(private loginService: LoginService, 
    private snk: MatSnackBar,
    ) { }

  ngOnInit() {
  }
  login() {
    this.loginPending = true;
    // console.log(this.loginInfo)
    this.loginService.login(this.loginInfo)

      .subscribe(res => {
        this.loginPending = false;
        // if (!res.success) {
        //   this.snk.open(res.errorHint, null, {
        //     duration: 2000
        //   })
        // } 
      })
  }

}
