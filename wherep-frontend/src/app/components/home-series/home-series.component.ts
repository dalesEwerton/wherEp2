import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';
import {ShowSerieComponent} from '../show-serie/show-serie.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html',
  styleUrls: ['./home-series.component.css']
})
export class HomeSeriesComponent implements OnInit {

  series: any[];
  selectedEmoji: string;

  constructor(private serieService: SerieService, public dialog: MatDialog) {}

  ngOnInit() {

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

  openSerie(id) {

    this.serieService.setIdToOpen(id);
    const dialog = this.dialog.open(ShowSerieComponent);
    dialog.updateSize('90%', '90%')
  }
}
