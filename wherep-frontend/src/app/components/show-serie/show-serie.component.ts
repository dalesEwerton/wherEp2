import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-show-serie',
  templateUrl: './show-serie.component.html',
  styleUrls: ['./show-serie.component.css']
})
export class ShowSerieComponent implements OnInit {

  serieId: string;
  serie: any;

  constructor(public dialogRef: MatDialogRef<ShowSerieComponent>,
              private serieService: SerieService) {

    this.serieId = this.serieService.getIdToOpen();
    this.getSerie();
  }

  ngOnInit() {

  }

  getSerie() {

    const request = this.serieService.searchSerieById(this.serieId);

    request.subscribe(
      (responce) => {
        this.serie = responce;
      }, (err) => {
        console.log(err);
      }
    );
  }

  addToMySeries() {
    this.serieService.addSerie(this.serie.Title, this.serieId);
  }
}
