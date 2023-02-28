import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

import { FileService } from './../../services/file.service';
import { Qanda } from './../../shared/models';

@Component({
  selector: 'app-qanda-detail',
  templateUrl: './qanda-detail.component.html',
  styleUrls: ['./qanda-detail.component.scss'],
})
export class QandaDetailComponent implements OnInit {
  heading = 'Questions & Answers';
  sno = '';
  qandas: Qanda[] = [];
  qanda: Qanda = {
    answer: '',
    question: '',
    serialno: 0,
  };
  loading = false;
  next = 0;
  prev = 0;
  nextAvailable = true;
  prevAvailable = true;

  constructor(
    private actRoute: ActivatedRoute,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.sno = this.actRoute.snapshot.paramMap.get('serialno')!;
    this.reloadQandas();
  }

  reloadQandas() {
    this.loading = true;
    this.fileService
      .loadQandas()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((qandaList) => {
        this.qandas = qandaList;
        this.qanda = this.qandas.find((word) => {
          return word.serialno === parseInt(this.sno);
        });
        this.heading = `${this.qanda.serialno} - ${this.qanda.question}`;
        if (parseInt(this.sno) == this.qandas.length) {
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
    if (newno < this.qandas.length) {
      this.nextAvailable = true;
    }
    this.sno = newno.toString();
    this.qanda = this.qandas.find((word) => {
      return word.serialno === parseInt(this.sno);
    });
    this.heading = `${this.qanda.serialno} - ${this.qanda.question}`;
  }

  goNext() {
    let newno = parseInt(this.sno) + 1;
    if (newno == this.qandas.length) {
      this.nextAvailable = false;
    }
    if (newno > 1) {
      this.prevAvailable = true;
    }
    this.sno = newno.toString();
    this.qanda = this.qandas.find((word) => {
      return word.serialno === parseInt(this.sno);
    });
    this.heading = `${this.qanda.serialno} - ${this.qanda.question}`;
  }
}
