import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from './user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SerieService {

  serieToOpen: any;
  config: any;
  addBtn: boolean;

  constructor (private http: HttpClient,
               private router: Router,
               private userServivce: UserService) {

    this.setConfiguration();
  }


  searchSeries(search: string) {

    const request = this.http.get(this.config['searchApi'] + search);
    return request;
  }

  openSerieDetails(id: string, addOption: boolean) {

    this.addBtn = addOption;

    this.http.get(this.config['getByIdApi'] + id )
      .subscribe(
        (responce) => {
          this.serieToOpen = responce;
          this.router.navigate(['seriesdetail']);
        }, (err) => {
          console.log(err);
          alert(err['error']['message']);
        }
      );
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
            this.userServivce.userSeries.push(responce['data']);
            this.router.navigate(['searchserie']);
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
          if (responce['status'] === 'SUCCESS') {
            alert(responce['message']);
          }

        }, (err) => {
          console.log(err);
          alert(err['error']['message']);
        }
      );

  }

  removeSerie(serie: any) {

    if(confirm('Do you wanna remove ' + serie.Title + ' ?')) {
      const url = this.config['serieApi'] + '/' + serie.id;
      this.http.delete(url, httpOptions)
        .subscribe(
          (responce) => {
            if (responce['status'] === 'SUCCESS') {
              alert(responce['message']);
              this.userServivce.removeSerieLocal(serie.Title);
            }

          }, (err) => {
            console.log(err);
            alert(err['error']['message']);
          }
        );
    }
  }
}
