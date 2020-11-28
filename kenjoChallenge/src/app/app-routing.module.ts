import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './pages/album/album.component';
import { NewContentComponent } from './pages/new-content/new-content.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "artist/:id", component: ArtistComponent},
  {path: "album/:id", component: AlbumComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "new-content", component: NewContentComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
