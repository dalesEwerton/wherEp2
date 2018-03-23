import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SerieService {

  serieToOpen: any;
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

  setSerieToOpen(serie: any) {
    this.serieToOpen = serie;
  }

  setConfiguration() {
    this.http.get('../../assets/config.json')
      .subscribe(
        (responce) => {
          this.config = responce;
        });
  }

  addSerie(serie: any) {

    const data = JSON.stringify(
      {
        'Title': serie.Title,
        'imdbId': serie.imdbID,
        'Poster': serie.Poster,
        'Plot': serie.Plot,
        'Genre': serie.Genre,
        'Actors': serie.Actors,
        'totalSeasons': serie.totalSeasons,
        'imdbRating': serie.imdbRating,
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

  updateSerie(serie: any) {

    const url = this.config['serieApi'] + '/' + serie.id;
    console.log(url);
    this.http.put(url, JSON.stringify(serie), httpOptions)
      .subscribe(
        (responce) => {
          console.log(responce)
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
