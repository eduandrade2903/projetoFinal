import { LoginService } from './../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { moveIcon, moveIconInside } from '../animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIcon, moveIconInside],
})
export class LoginComponent implements OnInit {
  isFull: boolean = false;
  isFull2: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    //validations
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.minLength(3)],
      senha: ['', Validators.minLength(3)],
    });
  }
  //get user
  get usuario() {
    return this.loginForm.get('usuario')!;
  }
  //get password
  get senha() {
    return this.loginForm.get('senha')!;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loginService.auth(this.usuario, this.senha);

      this.router.navigate(['home']);
    }
  }
}
