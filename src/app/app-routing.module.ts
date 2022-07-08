import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordftdComponent } from './components/wordftd/wordftd.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { GentorevComponent } from './components/gentorev/gentorev.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

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
    path: 'wordftd',
    component: WordftdComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
