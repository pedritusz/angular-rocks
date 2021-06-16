
import { Component, OnInit,  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DetailGroupInterface } from 'src/app/interfaces/detail-group';
import { RockService } from 'src/app/services/rock.service';


@Component({
  selector: 'app-deails',
  templateUrl: './deails.component.html',
  styleUrls: ['./deails.component.scss']
})
export class DeailsComponent implements OnInit {
  group:DetailGroupInterface | undefined;
  

  constructor(public activateRoute:ActivatedRoute, public rockService:RockService,public  domSanitizer: DomSanitizer) {
    
  }
 

  ngOnInit(): void {
    this.rockService.data.find((element)=>{  
      
      
      
      console.log( );
      if(element.id === parseInt( this.activateRoute.snapshot.params.id)){
        
       
     this.group = element;
     let id = this.group.videoUrl.split("=")
     this.group.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ id[1]) as any;
     
     
     
     

     
      
        
      }
    })
    
  
  }

}
