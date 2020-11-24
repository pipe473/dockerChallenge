import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ArtistFormsComponent } from './pages/artist-forms/artist-forms.component';
import { AlbumComponent } from './pages/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumsComponent,
    ArtistFormsComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule
    
  ],
  providers: [
    MatCardModule,
    MatButtonModule,
    DatePipe,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
