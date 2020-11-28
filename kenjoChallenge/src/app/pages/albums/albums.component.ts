import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/album.service';
import { Album } from 'src/app/models/album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  public albumList: Album[];
  public albumArtist: Album;

  constructor(private apiService: AlbumService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllAlbums().subscribe((data: Album[]) => {
      this.albumList = data;
    });
  }

  showAlbum(albumId: string){
    this.router.navigate(['/album', albumId]);
    console.log(albumId, 'id album');  
  }
 
}
