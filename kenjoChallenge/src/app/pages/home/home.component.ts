import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listArtists: Artist[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllArtists().subscribe((data:Artist[]) =>{
      this.listArtists = data;   
      console.log(this.listArtists);
         
    });
  }

}
