import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = "http://localhost:3000";
  public albumCreado: Album;

  constructor( private http: HttpClient ) { }
  postAlbum(newAlbum: Album){
    return this.http.post(this.url+"/album", newAlbum)
  }

  getAllAlbums(){
    return this.http.get(`${this.url}/albums/all`)
  }

  getAlbumById(albumId){
    return this.http.get(`${this.url}/album/${albumId}`);    
  }

  updateAlbumById(newAlbum: Album, albumId){
    return this.http.put(`${this.url}/album/${albumId}`, newAlbum)
  }

  deleteAlbum(albumtId){
    return this.http.delete(`${this.url}/album/${albumtId}`)
  }
}
