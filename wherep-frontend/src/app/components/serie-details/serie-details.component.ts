import { Component, OnInit } from '@angular/core';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {

  serie: any;

  constructor(private serieService: SerieService) {
    this.serie = this.serieService.serieToOpen;
  }

  ngOnInit() {
  }

}
