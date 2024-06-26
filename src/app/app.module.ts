import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent, SafePipe, TrustHtmlPipe } from './app.component';
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
import { VideoDialogComponent } from './shared/video-dialog/video-dialog.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongstaComponent } from './components/songsta/songsta.component';
import { WordftdDetailComponent } from './components/wordftd-detail/wordftd-detail.component';
import { QandaDetailComponent } from './components/qanda-detail/qanda-detail.component';
import { SongsDetailComponent } from './components/songs-detail/songs-detail.component';
import { SermonaudioComponent } from './components/sermonaudio/sermonaudio.component';
import { MessageaudioComponent } from './components/messageaudio/messageaudio.component';
import { SermonseriesComponent } from './components/sermonseries/sermonseries.component';
import { YtplaylistComponent } from './components/ytplaylist/ytplaylist.component';
import { YtvideosComponent } from './components/ytvideos/ytvideos.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AudiosComponent } from './components/audios/audios.component';

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
    VideoDialogComponent,
    SafePipe,
    TrustHtmlPipe,
    SongsComponent,
    SongstaComponent,
    WordftdDetailComponent,
    QandaDetailComponent,
    SongsDetailComponent,
    SermonaudioComponent,
    MessageaudioComponent,
    SermonseriesComponent,
    YtplaylistComponent,
    YtvideosComponent,
    PrivacyComponent,
    AudiosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
