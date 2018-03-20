import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SerieService {

  idToOpens: string;
  seriesUrl = 'https://omdbapi.com/?apikey=8cf50857&type=series';

  constructor(private http: HttpClient) { }


  searchSeries(search: string) {

    const request = this.http.get(this.seriesUrl + '&s=' + search);
    return request;
  }

  searchSerieById(id: string) {

    const request = this.http.get(this.seriesUrl + '&i=' + id  + '&plot=full');
    return request;
  }

  setIdToOpen(id: string) {
    this.idToOpens = id;
  }

  getIdToOpen() {
    return this.idToOpens;
  }
}
