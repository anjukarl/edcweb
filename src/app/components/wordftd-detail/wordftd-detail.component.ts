import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { FileService } from './../../services/file.service';
import { DailyWord } from './../../shared/models';

@Component({
  selector: 'app-wordftd-detail',
  templateUrl: './wordftd-detail.component.html',
  styleUrls: ['./wordftd-detail.component.scss'],
})
export class WordftdDetailComponent implements OnInit {
  heading = 'Daily Word - Audio & Text';
  sno = '';
  dailyWords: DailyWord[] = [];
  wordftd: DailyWord = {
    text: '',
    title: '',
    serialno: 0,
  };
  loading = false;
  next = 0;
  prev = 0;
  nextAvailable = true;
  prevAvailable = true;

  constructor(
    private actRoute: ActivatedRoute,
    private fileService: FileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sno = this.actRoute.snapshot.paramMap.get('serialno')!;
    this.reloadDailyWord();
  }

  reloadDailyWord() {
    this.loading = true;
    this.fileService
      .loadDailyWord()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((dailywordList) => {
        this.dailyWords = dailywordList;
        this.wordftd = this.dailyWords.find((word) => {
          return word.serialno === parseInt(this.sno);
        });
        this.heading = `${this.wordftd.serialno} - ${this.wordftd.title}`;
        if (parseInt(this.sno) == this.dailyWords.length) {
          this.nextAvailable = false;
        }
        if (parseInt(this.sno) == 1) {
          this.prevAvailable = false;
        }
      });
  }

  goPrevious() {
    let newno = parseInt(this.sno) - 1;
    if (newno == 1) {
      this.prevAvailable = false;
    }
    if (newno < this.dailyWords.length) {
      this.nextAvailable = true;
    }
    this.sno = newno.toString();
    this.wordftd = this.dailyWords.find((word) => {
      return word.serialno === parseInt(this.sno);
    });
    this.heading = `${this.wordftd.serialno} - ${this.wordftd.title}`;
  }

  goNext() {
    let newno = parseInt(this.sno) + 1;
    if (newno == this.dailyWords.length) {
      this.nextAvailable = false;
    }
    if (newno > 1) {
      this.prevAvailable = true;
    }
    this.sno = newno.toString();
    this.wordftd = this.dailyWords.find((word) => {
      return word.serialno === parseInt(this.sno);
    });
    this.heading = `${this.wordftd.serialno} - ${this.wordftd.title}`;
  }
}
