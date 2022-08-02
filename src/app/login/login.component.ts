import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { moveIcon } from '../animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations : [moveIcon]
})
export class LoginComponent implements OnInit {
  isFull : boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.minLength(3)],
      senha: ['', Validators.minLength(3)],
    });
  }
  get usuario() {
    return this.loginForm.get('usuario')!;
  }
  get senha() {
    return this.loginForm.get('senha')!;
  }

  submit() {
    return this.router.navigate(['home']);;
  }
}


