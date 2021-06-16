import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailGroupInterface } from 'src/app/interfaces/detail-group';

import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groups : any ;
 

  constructor(public rockService:RockService,public router:Router) {

    this.rockService.allGroups$.subscribe((groupsObtained:DetailGroupInterface[])=>{
     
      this.groups as DetailGroupInterface[];
      this.groups = groupsObtained;
       
    })
   }

  ngOnInit(): void {

    this.rockService.firstConfiguration()
    
  }

  deleteGroup(idx:number){


    this.rockService.deleteGroup(idx)

  }
  
  itemGrouplistClickAction($event:any){
    


    if($event.action == 'primary'){
      console.log($event.data)

      this.router.navigate(["details/"+ $event.data])
      

    }else if( $event.action == 'secondary' ){
      
      
      this.deleteGroup($event.data)

    }

  }


 

  SearchGroup($event:any){
    console.log($event)
    
    

  }
  

}
