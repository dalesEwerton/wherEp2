import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialogRef} from '@angular/material';
import {ShowSerieComponent} from '../components/show-serie/show-serie.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SerieService {

  idToOpens: string;
  config: any;

  constructor (private http: HttpClient) {
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

  addSerie(Title: string, serieId: string) {

    const data = JSON.stringify(
      {
        'title': Title,
        'imdbId': serieId,
        'user_id': parseInt(localStorage.getItem('userId'))
      }
    );

    this.http.post(this.config['serieApi'], data, httpOptions)
      .subscribe(
        (responce) => {
          if (responce['status'] === 'SUCCESS') {
            alert(responce['message']);
          }

        }, (err) => {
          console.log(err);
          alert(err['error']['message']);
        }
      );
  }
}
