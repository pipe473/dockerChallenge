import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-artist-forms',
  templateUrl: './artist-forms.component.html',
  styleUrls: ['./artist-forms.component.css']
})
export class ArtistFormsComponent  {

  artistForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) { 
    this.createForm();
  }

  public createArtistForm(){
    let artist = this.artistForm.value;
    this.createArtist(artist);
  }

  createForm(){
    this.artistForm = this.fb.group({
      name: ['', Validators.required ],
      photoUrl: ['', Validators.required],
      birthdate: ['', Validators.required]
   });
  }

  // createArtist( name: string, photoUrl: string, birthdate: Date ){

  createArtist(artista: Artist ){
    if ( !artista.name || !artista.photoUrl || !artista.birthdate ) {     
      console.log(artista);      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar todos los campos'
      });
    } else {
      this.apiService.postArtist(new Artist( artista.name, artista.photoUrl, artista.birthdate )).subscribe((data: Artist) =>{
        this.apiService.artistaCreado = new Artist( artista.name, artista.photoUrl, artista.birthdate )
        console.log(data);        
          Swal.fire({
            icon: 'success',
            title: 'Artista añadido correctamente!',
            text: 'Ahora disfruta de tus mejores listas de artistas'
          });
          this.router.navigateByUrl('/home')
        });
      }
    }
  }

//   createAlbum( title: string, artistId: string, coverUrl: string, year: number, genre: string ){
//     let newAlbum = new Album( title, artistId, coverUrl, year, genre );
//     this.apiService.postAlbum(newAlbum).subscribe((data) =>{
//       console.log(data);      
//       this.router.navigateByUrl('/albums');
//     })
//   }

//   ngOnInit(): void {
//   }

// }
