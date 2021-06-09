import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailGroupInterface } from '../interfaces/detail-group';
import { groups } from '../mocks/mock'

@Injectable({
  providedIn: 'root'
})
export class RockService implements OnInit {

allGroups: DetailGroupInterface[] | undefined;
mockgroups = new groups();
getDbJsonGroups:any;
ngOnInit(){
  
  }
getDetails(id:number){


  

}
  constructor() { 
    
  }
  deleteGroup(id:number){

  }
  
  firstConfiguration(){
    if(window.localStorage.length == 0){
      
      window.localStorage.setItem("db",JSON.stringify(this.mockgroups))
      this.getGroups()
    }else{
      this.getGroups()
    }
    
  }



  getGroups(){
    this.getDbJsonGroups = window.localStorage.getItem('db')
    this.getDbJsonGroups = JSON.parse(this.getDbJsonGroups)
   console.log(this.getDbJsonGroups)
  }

  setNewGroup(){

  }


}


