import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';
import {ShowSerieComponent} from '../show-serie/show-serie.component';
import {MatDialog} from '@angular/material';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html',
  styleUrls: ['./home-series.component.css']
})
export class HomeSeriesComponent implements OnInit {

  series: any[];
  mySeries: any[];

  constructor(private serieService: SerieService,
              public dialog: MatDialog,
              public userService: UserService) {}

  ngOnInit() {
    this.mySeries = this.userService.userSeries;
  }

  searchSeries(e) {

   e.preventDefault();
   const search = e.target.elements[0].value;
   const request = this.serieService.searchSeries(search);

    request.subscribe(
      (responce) => {
        this.series = responce['Search'];
      }, (err) => {
        console.log(err);
      }
    );
  }

  openSerie(serie) {

    this.serieService.setSerieToOpen(serie);
    const dialog = this.dialog.open(ShowSerieComponent);
    dialog.updateSize('90%', '90%');
  }
}
