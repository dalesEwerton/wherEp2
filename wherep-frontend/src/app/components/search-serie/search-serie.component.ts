import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-search-serie',
  templateUrl: './search-serie.component.html',
  styleUrls: ['./search-serie.component.css']
})
export class SearchSerieComponent implements OnInit {

  series: any;

  constructor(private serieService: SerieService) { }

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

  openSerie(id: string) {
    console.log(id);
  }

}
