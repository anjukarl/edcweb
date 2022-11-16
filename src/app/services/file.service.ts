import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  Bibverses,
  Book,
  Bookpdf,
  DailyWord,
  Qanda,
  Songs,
  Track,
  Videos,
} from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private db: AngularFirestore) {}

  loadSongs(): Observable<Songs[]> {
    return this.db
      .collection('songs')
      .get()
      .pipe(map((results) => this.convertSnaps<Songs>(results)));
  }

  loadBooks(cat: string): Observable<Book[]> {
    return this.db
      .collection('books', (ref) =>
        ref.where('cat', '==', cat).orderBy('order')
      )
      .get()
      .pipe(map((results) => this.convertSnaps<Book>(results)));
  }

  loadBookpdfs(): Observable<Bookpdf[]> {
    return this.db
      .collection('bookpdfs')
      .get()
      .pipe(map((results) => this.convertSnaps<Bookpdf>(results)));
  }

  loadQandas(): Observable<Qanda[]> {
    return this.db
      .collection('qanda')
      .get()
      .pipe(map((results) => this.convertSnaps<Qanda>(results)));
  }

  loadDailyWord(): Observable<DailyWord[]> {
    return this.db
      .collection('dailyword')
      .get()
      .pipe(map((results) => this.convertSnaps<DailyWord>(results)));
  }

  loadTracks(cat: string): Observable<Track[]> {
    return this.db
      .collection('audio', (ref) =>
        ref.where('book', '==', cat).orderBy('name')
      )
      .get()
      .pipe(map((results) => this.convertSnaps<Track>(results)));
  }

  loadVerses(): Observable<Bibverses[]> {
    return this.db
      .collection('verses')
      .get()
      .pipe(map((results) => this.convertSnaps<Bibverses>(results)));
  }

  loadVideos(): Observable<Videos[]> {
    return this.db
      .collection('vmedia')
      .get()
      .pipe(map((results) => this.convertSnaps<Videos>(results)));
  }

  convertSnaps<T>(results: { docs: any[] }) {
    return <T[]>results.docs.map((snap) => ({
      id: snap.id,
      ...(<any>snap.data()),
    }));
  }
}
