import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public newAlbum: Album;
  public id: string;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService ) { 
    this.activatedRoute.params.subscribe((params) =>{
      this.id = params['id'];
      console.log(params['id'],'ide album');
      this.apiService.getAlbumById(this.id).subscribe((data: Album) =>{
        this.newAlbum = data[0];
        console.log(data[0]);                           
      })
    })
  }

  ngOnInit(): void {
  }

}
