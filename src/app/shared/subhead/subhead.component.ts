import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs';

import { FileService } from '../../services/file.service';
import { Bibverses } from '../models';

@Component({
  selector: 'app-subhead',
  templateUrl: './subhead.component.html',
  styleUrls: ['./subhead.component.scss'],
})
export class SubheadComponent implements OnInit {
  @Input() heading = '';

  title = '';
  reference = '';
  verses: Bibverses[] = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService
      .loadVerses()
      .pipe(take(1))
      .subscribe((results) => {
        this.verses = results;
        this.getTitle();
      });
  }

  getTitle() {
    const choice = Math.floor(Math.random() * this.verses.length);
    this.title = this.verses[choice].text;
    this.reference = this.verses[choice].reference;
  }
}
