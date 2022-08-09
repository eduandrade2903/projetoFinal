import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {

    this.SignForm = formBuilder.group({
      Usuario :['', Validators.compose([Validators.required, Validators.minLength(6)])],
      senha : ['',Validators.compose([Validators.minLength(6), Validators.pattern('[A-z0-9@#$%&""!\-()\/[\]\/]')])]
    })
   }

  ngOnInit(): void {
  }
  submit(){

  }
}
