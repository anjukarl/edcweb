import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Track, Book } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private db: AngularFirestore) {}

  loadBooks(): Observable<Book[]> {
    return this.db
      .collection('books', (ref) => ref.orderBy('order'))
      .get()
      .pipe(map((results) => this.convertSnaps<Book>(results)));
  }

  loadTracks(cat: string): Observable<Track[]> {
    return this.db
      .collection('audio', (ref) =>
        ref.where('book', '==', cat).orderBy('name')
      )
      .get()
      .pipe(map((results) => this.convertSnaps<Track>(results)));
  }

  convertSnaps<T>(results: { docs: any[] }) {
    return <T[]>results.docs.map((snap) => ({
      id: snap.id,
      ...(<any>snap.data()),
    }));
  }
}
