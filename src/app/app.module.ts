import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WordftdComponent } from './components/wordftd/wordftd.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { SubheadComponent } from './shared/subhead/subhead.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { WordftdvComponent } from './components/wordftdv/wordftdv.component';
import { BooksComponent } from './components/books/books.component';
import { QandaComponent } from './components/qanda/qanda.component';
import { WtbaudioComponent } from './components/wtbaudio/wtbaudio.component';
import { WtbvideoComponent } from './components/wtbvideo/wtbvideo.component';
import { WordftdtaComponent } from './components/wordftdta/wordftdta.component';
import { QandataComponent } from './components/qandata/qandata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WordftdComponent,
    VideosComponent,
    ContactComponent,
    SubheadComponent,
    ResourcesComponent,
    WordftdvComponent,
    BooksComponent,
    QandaComponent,
    WtbaudioComponent,
    WtbvideoComponent,
    WordftdtaComponent,
    QandataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
