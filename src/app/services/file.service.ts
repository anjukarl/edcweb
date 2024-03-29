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
  MessageAudio,
  Qanda,
  Sermon,
  Series,
  Songs,
  Track,
  Videos,
  YTPlaylist,
  YTVideo,
} from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private db: AngularFirestore) {}

  loadYTVideo(playlist: YTPlaylist): Observable<YTVideo[]> {
    return this.db
      .collection('videos', (ref) =>
        ref.where('playlistId', '==', playlist.playlistId)
      )
      .get()
      .pipe(map((results) => this.convertSnaps<YTVideo>(results)));
  }

  loadYTPlaylist(): Observable<YTPlaylist[]> {
    return this.db
      .collection('vplaylist', (ref) => ref.orderBy('title'))
      .get()
      .pipe(map((results) => this.convertSnaps<YTPlaylist>(results)));
  }

  loadSermons(series: Series): Observable<Sermon[]> {
    return this.db
      .collection('sermons', (ref) => ref.where('series', '==', series.text))
      .get()
      .pipe(map((results) => this.convertSnaps<Sermon>(results)));
  }

  loadSermonSeries(): Observable<Series[]> {
    return this.db
      .collection('series', (ref) => ref.orderBy('text'))
      .get()
      .pipe(map((results) => this.convertSnaps<Series>(results)));
  }

  loadMessages(): Observable<Message[]> {
    return this.db
      .collection('messages')
      .get()
      .pipe(map((results) => this.convertSnaps<Message>(results)));
  }

  loadMessagesaudio(): Observable<MessageAudio[]> {
    return this.db
      .collection('messagesaudio', (ref) => ref.orderBy('speaker'))
      .get()
      .pipe(map((results) => this.convertSnaps<MessageAudio>(results)));
  }

  loadSongs(): Observable<Songs[]> {
    return this.db
      .collection('songs', (ref) => ref.orderBy('serialno'))
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

  loadWTBVideos(): Observable<Videos[]> {
    return this.db
      .collection('videos', (ref) =>
        ref.where('playlistId', '==', 'PL_zVRulfx_gBn8AL8LE36roOo0wyNMN93')
      )
      .get()
      .pipe(map((results) => this.convertSnaps<Videos>(results)));
  }

  loadPlVideos(): Observable<Videos[]> {
    return this.db
      .collection('videos', (ref) =>
        ref.where('playlistId', '==', 'PL_zVRulfx_gCqKSkW47fkP2V1eln_zLy4')
      )
      .get()
      .pipe(map((results) => this.convertSnaps<Videos>(results)));
  }

  loadPlAudios(): Observable<Videos[]> {
    return this.db
      .collection('videos', (ref) =>
        ref.where('playlistId', '==', 'PL_zVRulfx_gBoivZNgfeRGZAnenGaxYpt')
      )
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
