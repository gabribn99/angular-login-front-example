import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppScreenComponent } from './app-screen/app-screen.component';
import { LogUserComponent } from './log-user/log-user.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  { path: 'home', component: MainScreenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addUser', component: AddUserComponent },
  { path: 'logUser', component: LogUserComponent },
  { path: 'app', component: AppScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }