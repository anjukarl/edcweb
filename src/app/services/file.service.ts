import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import {
  Bibverses,
  Book,
  Bookpdf,
  DailyWord,
  Message,
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

  loadMessages(): Observable<Message[]> {
    return this.db
      .collection('messages')
      .get()
      .pipe(map((results) => this.convertSnaps<Message>(results)));
  }

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
      .pipe(
        map((results) => this.convertSnaps<Book>(results)),
        shareReplay()
      );
  }

  loadBookpdfs(): Observable<Bookpdf[]> {
    return this.db
      .collection('bookpdfs')
      .get()
      .pipe(map((results) => this.convertSnaps<Bookpdf>(results)));
  }

  loadQandas(): Observable<Qanda[]> {
    return this.db
      .collection('qanda', (ref) => ref.orderBy('serialno'))
      .get()
      .pipe(
        map((results) => this.convertSnaps<Qanda>(results)),
        shareReplay()
      );
  }

  loadDailyWord(): Observable<DailyWord[]> {
    return this.db
      .collection('dailyword', (ref) => ref.orderBy('serialno', 'desc'))
      .get()
      .pipe(
        map((results) => this.convertSnaps<DailyWord>(results)),
        shareReplay()
      );
  }

  loadDWDetail(id: string) {
    return this.db.doc<DailyWord>(`dailyword/${id}`).valueChanges();
  }

  loadTracks(cat: string): Observable<Track[]> {
    return this.db
      .collection('audio', (ref) =>
        ref.where('book', '==', cat).orderBy('name')
      )
      .get()
      .pipe(
        map((results) => this.convertSnaps<Track>(results)),
        shareReplay()
      );
  }

  loadVerses(): Observable<Bibverses[]> {
    return this.db
      .collection('verses')
      .get()
      .pipe(
        map((results) => this.convertSnaps<Bibverses>(results)),
        shareReplay()
      );
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
