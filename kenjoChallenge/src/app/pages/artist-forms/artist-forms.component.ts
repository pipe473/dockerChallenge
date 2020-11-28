import { Component } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/shared/artist.service';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Swal } from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-artist-forms',
  templateUrl: './artist-forms.component.html',
  styleUrls: ['./artist-forms.component.css']
})
export class ArtistFormsComponent  {

  artistForm: FormGroup;

  constructor(private apiService: ArtistService, private router: Router, private fb: FormBuilder) 
    { 
      this.createArtistValidators();      
    }

  public createArtistForm()
    {
      let artist = this.artistForm.value;
      this.createArtist(artist);
    }

  createArtistValidators()
    {
      this.artistForm = this.fb.group({
        name: ['', Validators.required ],
        photoUrl: ['', Validators.required],
        birthdate: ['', Validators.required]
      });
    }

  createArtist(artista: Artist )
    {
      if ( !artista.name || !artista.photoUrl || !artista.birthdate ) {     
        console.log(artista);      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes completar todos los campos para añadir un artista nuevo'
        });
      } else {
        this.apiService.postArtist(new Artist( artista.name, artista.photoUrl, artista.birthdate )).subscribe((data: Artist) =>{
          this.apiService.artistaCreado = new Artist( artista.name, artista.photoUrl, artista.birthdate )
          console.log(data);        
            Swal.fire({
              icon: 'success',
              title: 'Artista añadido correctamente!',
              text: 'Disfruta de la lista de tus artistas preferidos'
            });
            this.router.navigateByUrl('/home')
          });
        }
      }    
    }
