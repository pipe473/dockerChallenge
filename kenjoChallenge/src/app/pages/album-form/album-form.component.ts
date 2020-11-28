import { Component } from '@angular/core';
import { AlbumService } from 'src/app/shared/album.service';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Swal } from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent {

  albumForm: FormGroup;

  constructor(private apiService: AlbumService, private router: Router, private fb: FormBuilder) 
    { 
      this.createAlbumValidator();
    }


  public createAlbumForm()
    {
      let album = this.albumForm.value;
      this.createNewAlbum(album);
    }


  createAlbumValidator()
    {
      this.albumForm = this.fb.group({
        title: ['', Validators.required ],
        artistId: ['', Validators.required ],
        coverUrl: ['', Validators.required ],
        year: ['', Validators.required ],
        genre: ['', Validators.required ]
      });
    }

  createNewAlbum(album: Album)
    {
      if (!album.title || !album.artistId || !album.coverUrl || !album.year || !album.genre) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes completar todos los campos'
        });
      } else {
        this.apiService.postAlbum(new Album( album.title, album.artistId, album.coverUrl, album.year, album.genre)).subscribe((data: Album) =>{
          this.apiService.albumCreado = new Album( album.title, album.artistId, album.coverUrl, album.year, album.genre)
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Album añadido correctamente!',
            text: 'Disfruta de los albums de tus artistas preferidos!'
          });
          this.router.navigateByUrl('/albums')
        })
      }
    }
  }
