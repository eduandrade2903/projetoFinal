import { SignUpComponent } from './sign-up/sign-up.component';
import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent },
  { path : 'home', component : HomeComponent},
  { path : 'signUp',component : SignUpComponent}
]


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
