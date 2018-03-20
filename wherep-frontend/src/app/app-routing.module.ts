import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeSeriesComponent} from './components/home-series/home-series.component';

const routs: Routes = [
  {path: '', component: LoginComponent},
  {path: 'searchserie', component: HomeSeriesComponent}
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
