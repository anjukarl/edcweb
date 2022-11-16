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
    path: 'wordftdv',
    component: WordftdvComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
  {
    path: 'wtbaudio',
    component: WtbaudioComponent,
  },
  {
    path: 'qanda',
    component: QandaComponent,
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
