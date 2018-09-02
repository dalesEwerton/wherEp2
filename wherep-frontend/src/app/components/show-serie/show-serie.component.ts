import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {SerieService} from '../../services/serie.service';

@Component({
  selector: 'app-show-serie',
  templateUrl: './show-serie.component.html',
  styleUrls: ['./show-serie.component.css']
})
export class ShowSerieComponent implements OnInit {

  serie: any;
  wherEp: any;
  checked: any;
  hasChange: boolean;
  gradeText: string;
  tempsCount: number;

  constructor(public dialogRef: MatDialogRef<ShowSerieComponent>,
              private serieService: SerieService) {

    this.serie = this.serieService.serieToOpen
    this.tempsCount = parseInt(this.serie['totalSeasons']);
  }

  ngOnInit() {

    this.hasChange = false;
    this.setWherEp();
    this.setGradeText();
  }


  setWherEp() {

    if (this.serie['Episode'] === null || this.serie['Season'] === null) {

      this.wherEp = 'You did not record your progress in the series.';

    } else {

      this.wherEp = 'You are in episode ' + this.serie['Episode'] +
        ' of season ' + this.serie['Season'];

    }
  }

  onEditToogle(e) {

    if (this.checked) {
      const atualComment = document.getElementById('notepad')['value'];

      if(atualComment !== this.serie.Comment) {
        this.serie.Comment = atualComment;
        this.hasChange = true;
      }
    }

    this.checked = e.checked;
    this.setWherEp();
    this.saveSerieChangesWithoutClose();
  }

  setTemp(e) {
    if (e.isUserInput === true) {
      this.serie.Season = e.valueOf().source.value;
      this.hasChange = true;
    }
  }

  setEp(e) {
    if (e.isUserInput === true) {
      this.serie.Episode = e.valueOf().source.value;
      this.hasChange = true;
    }
  }

  setGrade(e) {
    if (e.isUserInput === true) {
      this.serie.Grade = e.valueOf().source.value;
      this.hasChange = true;
      this.setGradeText();
    }
  }

  saveSerieChanges() {
    if (this.hasChange) {
      this.serieService.updateSerie(this.serie);
      this.hasChange = false;
    }
    this.dialogRef.close();
  }

  saveSerieChangesWithoutClose() {
    if (this.hasChange) {
      this.serieService.updateSerie(this.serie);
      this.hasChange = false;
    }
  }

  private setGradeText() {

    if (this.serie.Grade == null) {
      this.gradeText = 'Qual a sua nota para essa série?';
    }else {
      this.gradeText = 'Reavalie a série';
    }
  }

  showDetails() {
    this.dialogRef.close();
    this.serieService.openSerieDetails(this.serie.imdbId, false);
  }

  removeSerie() {
    this.serieService.removeSerie(this.serie);
  }

  getTemp() {
    let arr = [];
    for(let i = 1; i <  this.tempsCount + 1 ; i++) {
      arr.push(i);
    }
    return arr;
  }

  grades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  temps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  eps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40];

}
