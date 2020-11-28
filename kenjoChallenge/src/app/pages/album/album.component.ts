import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Album } from 'src/app/models/album';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent {
  public newAlbum: Album;
  public ide: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) =>{
      this.ide = params['id'];
      console.log(params['id'], 'second test');
      this.apiService.getAlbumById(this.ide).subscribe((data: any) => {
        this.newAlbum = data;
        console.log(data);        
      });
    });
  }

  updateAlbum(title: string, artistId: string, coverUrl: string, year: number, genre: string) {
    let albumNew = new Album(title, artistId, coverUrl, year, genre );
    this.apiService.updateAlbumById( albumNew, this.ide).subscribe((data: Album) => {
        console.log(data);
        this.router.navigateByUrl('/albums');
      });
  }

  

  deleteAlbumById() {
    Swal.fire({
      title: '¿Seguro que quieres eliminar este album?',
      text: "Asegúrate de eliminar el album que deseas",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Album eliminado!',
          'El album ha sido eliminado correctamente...',
          'success'
        )
        this.apiService.deleteAlbum(this.ide).subscribe((data: Album) => {
          this.router.navigateByUrl('/albums');
        });
      }
    });  
  }
}
