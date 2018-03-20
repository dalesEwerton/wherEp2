import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSelect,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeSeriesComponent } from './components/home-series/home-series.component';
import {HttpClientModule} from '@angular/common/http';
import {SerieService} from './services/serie.service';
import { ShowSerieComponent } from './components/show-serie/show-serie.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeSeriesComponent,
    ShowSerieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [SerieService],
  bootstrap: [AppComponent],
  entryComponents: [ShowSerieComponent]
})
export class AppModule { }
