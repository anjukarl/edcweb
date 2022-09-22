import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { FileService } from '../../services/file.service';
import { Book, Track } from '../../shared/models';

@Component({
  selector: 'app-wtbaudio',
  templateUrl: './wtbaudio.component.html',
  styleUrls: ['./wtbaudio.component.scss'],
})
export class WtbaudioComponent implements OnInit {
  heading = 'With the Bible - Audio (Kannada)';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';
  books$!: Observable<Book[]>;
  tracks$!: Observable<Track[]>;
  bibook = 'Genesis';
  cat = 'old';
  testaments = [
    { cat: 'old', name: 'Old Testament' },
    { cat: 'new', name: 'New Testament' },
  ];
  currentTrack = false;
  testaSubscription: Subscription = new Subscription();
  bookSubscription: Subscription = new Subscription();

  form = new FormGroup({
    testament: new FormControl('old', {
      updateOn: 'blur',
      validators: Validators.required,
    }),
    book: new FormControl('', {
      updateOn: 'blur',
      validators: Validators.required,
    }),
    track: new FormControl('', {
      updateOn: 'blur',
      validators: Validators.required,
    }),
  });

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.books$ = this.fileService.loadBooks(this.cat);
    this.tracks$ = this.fileService.loadTracks(this.bibook);
    this.onChangeTestament();
    this.onChangeBook();
  }

  onChangeTestament(): void {
    this.testaSubscription = this.form
      .get('testament')!
      .valueChanges.subscribe((testa) => {
        this.cat = testa;
        this.books$ = this.fileService.loadBooks(this.cat);
        this.form.controls['track'].setValue(null);
      });
  }

  onChangeBook(): void {
    this.bookSubscription = this.form
      .get('book')!
      .valueChanges.subscribe((book) => {
        this.bibook = book;
        this.tracks$ = this.fileService.loadTracks(this.bibook);
        this.currentTrack = false;
      });
  }

  onSelectTrack() {
    this.currentTrack = true;
  }

  ngOnDestroy() {
    if (this.testaSubscription) {
      this.testaSubscription.unsubscribe();
    }

    if (this.bookSubscription) {
      this.bookSubscription.unsubscribe();
    }
  }

  get testa() {
    return this.form.controls['testament'];
  }

  get book() {
    return this.form.controls['book'];
  }

  get track() {
    return this.form.controls['track'];
  }
}
