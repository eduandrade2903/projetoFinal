import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
