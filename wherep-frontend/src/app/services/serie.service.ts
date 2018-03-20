import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SerieService {

  idToOpens: string;
  config: any;

  constructor(private http: HttpClient) {
    this.setConfiguration();
  }


  searchSeries(search: string) {

    const request = this.http.get(this.config['searchApi'] + search);
    return request;
  }

  searchSerieById(id: string) {

    const request = this.http.get(this.config['getByIdApi'] + id );
    return request;
  }

  setIdToOpen(id: string) {
    this.idToOpens = id;
  }

  getIdToOpen() {
    return this.idToOpens;
  }

  setConfiguration() {
    this.http.get('../../assets/config.json')
      .subscribe(
        (responce) => {
          this.config = responce;
        });
  }
}
