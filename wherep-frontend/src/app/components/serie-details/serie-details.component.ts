import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';
import { Location } from '@angular/common';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {

  serie: any;
  addBtn: any;

  constructor(private serieService: SerieService,
              private location: Location,
              private userService: UserService) {

    this.serie = this.serieService.serieToOpen;
    this.setBtnAdd();
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  addToMySeries() {
    this.serieService.addSerie(this.serie);
  }

  setBtnAdd() {
    const userSeries = this.userService.userSeries;

    this.addBtn = this.serieService.addBtn;

    for (const serie of userSeries) {
      if (serie.Title === this.serie.Title) {
        this.addBtn = false;
        break;
      }
    }
  }

}
