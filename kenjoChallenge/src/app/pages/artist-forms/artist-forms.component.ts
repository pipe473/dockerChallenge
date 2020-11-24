import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-artist-forms',
  templateUrl: './artist-forms.component.html',
  styleUrls: ['./artist-forms.component.css']
})
export class ArtistFormsComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router,) { }

  createArtist( name: string, photoUrl: string, birthdate: Date ){
   
    let artist = new Artist( name, photoUrl, birthdate );
    this.apiService.postArtist(artist).subscribe((data) =>{
      console.log(data);      
      this.router.navigateByUrl('/home');
    })
  }

  createAlbum( title: string, artistId: string, coverUrl: string, year: number, genre: string ){
    let newAlbum = new Album( title, artistId, coverUrl, year, genre );
    this.apiService.postAlbum(newAlbum).subscribe((data) =>{
      console.log(data);      
      this.router.navigateByUrl('/albums');
    })
  }

  ngOnInit(): void {
  }

}
