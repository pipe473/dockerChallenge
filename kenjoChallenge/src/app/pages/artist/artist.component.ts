import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  public newArtist: Artist;
  public id: string;
  public artistNew: Artist;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.apiService.getArtistById(this.id).subscribe((data: any) => {
        this.newArtist = data;    
      });
    });
  }

  
  updateArtist(name: string, photoUrl: string, birthdate: Date) {
    this.artistNew = new Artist(name, photoUrl, birthdate);
    this.apiService.updateArtistById(this.artistNew, this.id).subscribe((data: Artist) => {
        this.router.navigateByUrl('/home');
      });
  }

  deleteArtistById() {
    Swal.fire({
      title: '¿Quieres eliminar el artista seleccionado?',
      text: "Asegúrate de eliminar el artista correcto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Artista eliminado!',
          'El artista ha sido eliminado correctamente...',
          'success'
        )
        this.apiService.deleteArtist(this.id).subscribe((data: Artist) => {
          this.router.navigateByUrl('/home');
        });
      }
    })    
  }

 
  

  // deleteArtistById() {
  //   this.apiService.deleteArtist(this.id).subscribe((data: Artist) => {
  //     console.log(data);
  //     this.router.navigateByUrl('/home');
  //   });
  // }
}
