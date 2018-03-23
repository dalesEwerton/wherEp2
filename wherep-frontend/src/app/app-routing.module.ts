import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeSeriesComponent} from './components/home-series/home-series.component';
import {AuthGuard} from './guards/auth.guard';
import {HeaderComponent} from './components/header/header.component';

const routs: Routes = [
  {path: '', component: LoginComponent},
  {path: 'searchserie', canActivate: [AuthGuard], component: HeaderComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  declarations: []
})
export class AppRoutingModule { }
