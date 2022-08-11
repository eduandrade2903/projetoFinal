import { routing } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signUp.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, routing],
  exports: [SignUpComponent],
})
export class SignUpModule {}
