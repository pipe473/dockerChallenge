import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Artist } from '../models/artist';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  postArtist(newArtist: Artist){
    return this.http.post(this.url+"/artist", newArtist)
  }

  getAllArtists(){
    return this.http.get(`${this.url}/artists/all`)
  }

  getArtistById(artistId){
    return this.http.get(`${this.url}/artist/${artistId}`)
  }

  updateArtistById(newArtist: Artist, artistId){
    return this.http.put(`${this.url}/artist/${artistId}`, newArtist)
  }

  deleteArtist(artistId){
    return this.http.delete(`${this.url}/artist/${artistId}`)
  }

  postAlbum(newAlbum: Album){
    return this.http.post(this.url+"/album", newAlbum)
  }

  getAllAlbums(){
    return this.http.get(`${this.url}/albums/all`)
  }

  getAlbumById(albumId){
    return this.http.get(`${this.url}/album/${albumId}`)
  }
}
