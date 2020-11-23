import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
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

  constructor(private apiService: ApiService, private router: Router) {  }

  ngOnInit(): void {
    this.apiService.getAllAlbums().subscribe((data: Album[]) => {
      this.albumList = data;
      console.log(this.albumList);
    });
  }

  showAlbum(albumId: string){
    this.router.navigate(['/album', albumId]);
    console.log(albumId, 'id album');  
  }
 
}
