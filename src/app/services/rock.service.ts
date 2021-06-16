import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, observable, Observable, } from 'rxjs';
import { DetailGroupInterface } from '../interfaces/detail-group';

import { groups } from '../mocks/mock'

@Injectable({
  providedIn: 'root'
})
export class RockService implements OnInit {

  /** obserbables */

  allGroups$: EventEmitter<groups> = new EventEmitter();
/**   variables   */ 
  data: DetailGroupInterface[] = [];

  mockgroups = new groups();
  
  ngOnInit() {
    
    

  }
 
  constructor() {

  }

  /** functions */

  deleteGroup(id: number) {
    
    let groups: DetailGroupInterface[] = this.data;
    
    
    this.data.map((group, idx)=>{

      if(group.id === id){
        groups.splice(idx,1);
      };

    });

    localStorage.clear()
    window.localStorage.setItem("db", JSON.stringify(groups));
    this.getGroups();

  }

  firstConfiguration() {

    if (window.localStorage.length === 0) {
      window.localStorage.setItem("db", JSON.stringify(this.mockgroups.grupos));
      this.getGroups();

    } else {

      this.getGroups();

    }
    
    

  }



  getGroups() {
    
    let getDbJsonGroups: any;
    getDbJsonGroups = window.localStorage.getItem('db');
    getDbJsonGroups = JSON.parse(getDbJsonGroups);
    this.allGroups$.emit(getDbJsonGroups);
    this.data as DetailGroupInterface[]; 
    getDbJsonGroups as DetailGroupInterface[];
    this.data= getDbJsonGroups;
  }

  setNewGroup(group:DetailGroupInterface) {

    group.id = this.generateId();
    let groups = this.data;
    groups.push(group);
    localStorage.clear();
    window.localStorage.setItem("db", JSON.stringify(groups));
    this.getGroups();

  }

  generateId():any {

    let idconf: number;
    
    idconf = Math.random() * 1000
    idconf = Math.round(idconf)

    if (this.data.find( ( group ) => {

      group.id === idconf

    } ) === undefined) {

      return idconf

    } else {
      
      return this.generateId()

    }

  }

  searchGroup(searchText:string){
    
    this.allGroups$.emit(undefined)
    let search:any[]=[];
      
    

    this.data.find( (group) =>{
      
      
      if( searchText == ""){
        console.log('else');
        
        this.getGroups()

      }

      if(group.name.toLowerCase().includes(searchText.toLowerCase()) == true){

        
       search.push(group)

      }

      
      
    })
    this.allGroups$.emit(search as unknown as groups)
  }

}


