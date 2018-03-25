import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeSeriesComponent} from './components/home-series/home-series.component';
import {AuthGuard} from './guards/auth.guard';
import {HeaderComponent} from './components/header/header.component';
import {SerieDetailsComponent} from './components/serie-details/serie-details.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {SearchSerieComponent} from './components/search-serie/search-serie.component';

const routs: Routes = [
  {path: '', component: LoginComponent},
  {path: 'create', component: CreateAccountComponent},
  {path: 'searchserie', canActivate: [AuthGuard], component: SearchSerieComponent},
  {path: 'homeserie', canActivate: [AuthGuard], component: HomeSeriesComponent},
  {path: 'seriesdetail', canActivate: [AuthGuard], component: SerieDetailsComponent},
  {path: '**', component: LoginComponent}
];

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
