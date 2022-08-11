import { Usuario } from 'src/app/models/usuario.model';
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
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.pattern(/[A-z]*/),
        Validators.pattern(/[a-z]*/),
        Validators.pattern(/[0-9]*/),
        Validators.pattern(/[@#$%&!-]*/),
        Validators.required,
      ]),],
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
      console.log('algo deu errado!!')
      return;
    } else {
      this.loginService.auth(this.loginForm.value).then(
        ()=> {
          this.router.navigate(['home']);
        }
      )


    }
  }
}
