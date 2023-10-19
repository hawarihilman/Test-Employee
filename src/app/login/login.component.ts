import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fcEmail: FormControl;
  fcPassword: FormControl;
  fcCheckboxRememberMe: FormControl;
  loginAccount: {
    email: string,
    password: string
  }
  errorLogin: boolean;
  errorMessage: string;

  constructor(
    private router: Router
  ) {
    this.fcEmail = new FormControl('', Validators.required);
    this.fcPassword = new FormControl('', Validators.required);
    this.fcCheckboxRememberMe = new FormControl('', Validators.required);
    this.loginAccount = {
      email: 'user',
      password: 'user1234'
    }
    this.errorLogin = false;
    this.errorMessage = '';
  }

  goToEmployeeList(): void {
    if (this.fcEmail.value === this.loginAccount.email && this.fcPassword.value === this.loginAccount.password) {
      this.router.navigate(['/employee-list']);
    } else {
      this.errorLogin = true
      this.errorMessage = 'ERROR, Email or Password is incorrect';
    }
  }

}
