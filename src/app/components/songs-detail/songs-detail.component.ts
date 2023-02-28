import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

import { FileService } from './../../services/file.service';
import { Songs } from './../../shared/models';

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrls: ['./songs-detail.component.scss'],
})
export class SongsDetailComponent implements OnInit {
  heading = 'Songs - Text';
  sno = '';
  songs: Songs[] = [];
  song: Songs = {
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
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.sno = this.actRoute.snapshot.paramMap.get('serialno')!;
    this.reloadSongs();
  }

  reloadSongs() {
    this.loading = true;
    this.fileService
      .loadSongs()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((songsList) => {
        this.songs = songsList;
        this.song = this.songs.find((song) => {
          return song.serialno === parseInt(this.sno);
        });
        this.heading = `${this.song.serialno} - ${this.song.title}`;
        if (parseInt(this.sno) == this.songs.length) {
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
    if (newno < this.songs.length) {
      this.nextAvailable = true;
    }
    this.sno = newno.toString();
    this.song = this.songs.find((song) => {
      return song.serialno === parseInt(this.sno);
    });
    this.heading = `${this.song.serialno} - ${this.song.title}`;
  }

  goNext() {
    let newno = parseInt(this.sno) + 1;
    if (newno == this.songs.length) {
      this.nextAvailable = false;
    }
    if (newno > 1) {
      this.prevAvailable = true;
    }
    this.sno = newno.toString();
    this.song = this.songs.find((song) => {
      return song.serialno === parseInt(this.sno);
    });
    this.heading = `${this.song.serialno} - ${this.song.title}`;
  }
}
