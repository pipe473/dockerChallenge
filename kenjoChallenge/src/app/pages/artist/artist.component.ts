import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  public newArtist: Artist; 
  public id : string;

  constructor( private activatedRoute: ActivatedRoute, private apiService: ApiService ) {
   
   this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(params['id']);   
      this.apiService.getArtistById(this.id).subscribe((data:any) =>{
        console.log(data.name);        
        this.newArtist = data;          
      });  
    });

   }

  ngOnInit(): void {
    
  }

}
