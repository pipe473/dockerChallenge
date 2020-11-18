import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  postArtist(newArtist: Artist){
    return this.http.post(this.url+"/artist", newArtist)
  }

  getArtists(){
    return this.http.get(this.url+"/artists/all")
  }
}
