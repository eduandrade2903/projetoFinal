import { ModuleWithProviders, NgModule } from '@angular/core';
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
  {path : 'home', component : HomeComponent}
]


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
