import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Album } from 'src/app/models/album';


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
    this.apiService.deleteAlbum(this.ide).subscribe((data: Album) => {
      console.log(data);
      this.router.navigateByUrl('/albums');
    });
  }

}
