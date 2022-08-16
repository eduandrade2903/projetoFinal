import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../service/salvar/signUp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit {
  SignForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signUp: SignUpService,
    private router: Router
  ) {
    //instanciando formulario e campos
    this.SignForm = formBuilder.group({
      usuario: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.email,
        ]),
      ],
      senha: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.pattern(/[A-z]*/),
          Validators.pattern(/[a-z]*/),
          Validators.pattern(/[0-9]*/),
          Validators.pattern(/[@#$%&!-]*/),
          Validators.required,
        ]),
      ],
      confirma : ['']
    });
  }

  ngOnInit(): void {}

  save() {
    if (this.SignForm.valid) {
      this.signUp
        .create(this.SignForm.value)
        .then(() => {
          this.SignForm.reset();
          this.router.navigate(['']);
        })
        .catch((erro) => console.log(erro));
    } else {
      console.log('ops, alguma coisa deu errado');
    }
  }
}
