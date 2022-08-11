import { SignUpComponent } from './signUp/signUp.component';
import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
  },
  { path: 'signUp', component: SignUpComponent },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(APP_ROUTES);
