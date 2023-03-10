import { SongsComponent } from './components/songs/songs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordftdComponent } from './components/wordftd/wordftd.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { WordftdvComponent } from './components/wordftdv/wordftdv.component';
import { BooksComponent } from './components/books/books.component';
import { QandaComponent } from './components/qanda/qanda.component';
import { WtbvideoComponent } from './components/wtbvideo/wtbvideo.component';
import { WtbaudioComponent } from './components/wtbaudio/wtbaudio.component';
import { WordftdDetailComponent } from './components/wordftd-detail/wordftd-detail.component';
import { QandaDetailComponent } from './components/qanda-detail/qanda-detail.component';
import { SongsDetailComponent } from './components/songs-detail/songs-detail.component';
import { SermonaudioComponent } from './components/sermonaudio/sermonaudio.component';
import { MessageaudioComponent } from './components/messageaudio/messageaudio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'wordftd',
    component: WordftdComponent,
  },
  {
    path: 'wordftd/:serialno',
    component: WordftdDetailComponent,
  },
  {
    path: 'wordftdv',
    component: WordftdvComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'songs/:serialno',
    component: SongsDetailComponent,
  },
  {
    path: 'wtbaudio',
    component: WtbaudioComponent,
  },
  {
    path: 'sermonaudio',
    component: SermonaudioComponent,
  },
  {
    path: 'qanda',
    component: QandaComponent,
  },
  {
    path: 'qanda/:serialno',
    component: QandaDetailComponent,
  },
  {
    path: 'wtbvideo',
    component: WtbvideoComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'messageaudio',
    component: MessageaudioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
