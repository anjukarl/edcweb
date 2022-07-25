import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordftdComponent } from './components/wordftd/wordftd.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { GentorevComponent } from './components/gentorev/gentorev.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { WordftdvComponent } from './components/wordftdv/wordftdv.component';
import { AudiosComponent } from './components/audios/audios.component';
import { BooksComponent } from './components/books/books.component';
import { QandaComponent } from './components/qanda/qanda.component';

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
    path: 'gentorev',
    component: GentorevComponent,
  },
  {
    path: 'wordftdv',
    component: WordftdvComponent,
  },
  {
    path: 'wordftd',
    component: WordftdComponent,
  },
  {
    path: 'audios',
    component: AudiosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'qanda',
    component: QandaComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
