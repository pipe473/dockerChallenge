import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtistFormComponent } from './pages/artist-form/artist-form.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "artist-form", component: ArtistFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
