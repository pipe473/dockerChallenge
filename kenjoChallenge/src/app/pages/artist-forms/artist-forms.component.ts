import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
  }

}
