import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  public newArtist: Artist; 
  public id : string;

  constructor( private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router ) {
   
   this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(params['id']);   
      this.apiService.getArtistById(this.id).subscribe((data:any) =>{  
        this.newArtist = data;          
      });  
    });
   }

   updateArtist(name: string, photoUrl: string, birthdate: Date ){
     let artistNew = new Artist(name, photoUrl, birthdate )
     this.apiService.updateArtistById(artistNew, this.id).subscribe((data:Artist) =>{
       console.log(data);    
       this.router.navigateByUrl('/home');  
     }); 
  }

  deleteArtistById(){
    this.apiService.deleteArtist(this.id).subscribe((data:Artist) =>{
      console.log(data);
      this.router.navigateByUrl('/home'); 
    });
  }

  ngOnInit(): void {
    
  }

}
