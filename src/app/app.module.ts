import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { BannerComponent } from '../app/components/banner/banner.component';
import { CardComponent } from '../app/components/card/card.component';
import { PopularComponent } from '../app/components/popular/popular.component';
import { SearchComponent } from '../app/components/search/search.component';
import { VideoCardComponent } from '../app/components/video-card/video-card.component';
import { PlaybouttonComponent } from '../app/components/playboutton/playboutton.component';
import { CirclePComponent } from './components/card/circle-p/circle-p.component';
import { HomeComponent } from './home/home.component';
import { MovieDesComponent } from './components/movie-des/movie-des.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FooterComponent } from './components/footer/footer.component';
import { TruncateTextPipe } from './truncate-text.pipe';
import { SafePipe } from './safe-pipe.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SerachCardComponent } from './components/serach-card/serach-card.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CardComponent,
    PopularComponent,
    SearchComponent,
    VideoCardComponent,
    PlaybouttonComponent,
    CirclePComponent,
    HomeComponent,
    MovieDescriptionComponent,
    MovieDesComponent,
    VideoPlayerComponent,
    FooterComponent,
    TruncateTextPipe,
    SafePipe,
    PaginationComponent,
    CardListComponent,
    LoadingComponent,
    SearchResultComponent,
    SerachCardComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    ReadMoreComponent,
    ContactusComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
    // BackButtonDisableModule.forRoot({
    //   preserveScrollPosition: true
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
