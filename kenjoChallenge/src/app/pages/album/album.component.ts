import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/shared/album.service';
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
  public albumNew: Album;

  constructor( private activatedRoute: ActivatedRoute, private apiService: AlbumService, private router: Router ) 
    {
      this.activatedRoute.params.subscribe((params) =>{
        this.ide = params['id'];
        this.apiService.getAlbumById(this.ide).subscribe((data: Album) => {
          this.newAlbum = data;      
        });
      });
    }

  updateAlbum(title: string, artistId: string, coverUrl: string, year: number, genre: string)
    {

      Swal.fire({
        title: '¿Seguro que quieres editar el album?',
        text: "Asegúrate de editar el album correctamente...",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffc107',
        cancelButtonColor: '#d33',
        confirmButtonText: 'editar',
        color: 'black'
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Album editado!',
            'El album ha sido editado correctamente...',
            'success'
          )
          this.albumNew = new Album(title, artistId, coverUrl, year, genre );
          this.apiService.updateAlbumById( this.albumNew, this.ide).subscribe((data: Album) => {
              this.router.navigateByUrl('/albums');
          });
        }
      });  
    }  

  deleteAlbumById() 
    {
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
