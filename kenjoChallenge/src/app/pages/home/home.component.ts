import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/shared/artist.service';
import { Artist } from 'src/app/models/artist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public listArtists: Artist[];

  constructor(private apiService: ArtistService, private router: Router) {}

  ngOnInit(): void 
    {
      this.apiService.getAllArtists().subscribe((data: Artist[]) => {
        this.listArtists = data;
        console.log(data);
      });
    }

  showArtist(artistId: string) 
    {
      this.router.navigate(['/artist', artistId]);
    }
}
