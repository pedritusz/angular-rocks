import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { BehaviorSubject, observable, Observable, } from 'rxjs';
import { DetailGroupInterface } from '../interfaces/detail-group';
import { LocalStorageGroups } from '../interfaces/local-storage-groups';
import { groups } from '../mocks/mock'

@Injectable({
  providedIn: 'root'
})
export class RockService implements OnInit {

  allGroups$: EventEmitter<groups> = new EventEmitter();
  data: LocalStorageGroups = {
    grupos: []
  }

  mockgroups = new groups();

  ngOnInit() {

  }
 
  constructor() {

  }
  deleteGroup(id: number) {
    
    let groups = this.data
    groups.grupos.map((group, idx)=>{
      if(group.id === id){
        groups.grupos.splice(idx,1)
      }
    })
    localStorage.clear()
    window.localStorage.setItem("db", JSON.stringify(groups))
    this.getGroups()

  }

  firstConfiguration() {
    if (window.localStorage.length == 0) {

      window.localStorage.setItem("db", JSON.stringify(this.mockgroups.grupos))
      this.getGroups()
    } else {
      this.getGroups()
    }
    /* prueba  v*/
    console.log('id =>',this.generateId());
    

  }



  getGroups() {

    let getDbJsonGroups: any;

    getDbJsonGroups = window.localStorage.getItem('db')
    getDbJsonGroups = JSON.parse(getDbJsonGroups)

    this.allGroups$.emit(getDbJsonGroups)
    this.data = getDbJsonGroups;



  }

  setNewGroup(group:DetailGroupInterface) {
    group.id = this.generateId()
    let groups = this.data
    groups.grupos.push(group)
    localStorage.clear()
    window.localStorage.setItem("db", JSON.stringify(groups))
    this.getGroups()

  }

  generateId():any {
    let idconf: number;
    idconf = Math.random() * 1000
    idconf = Math.round(idconf)

    if (this.data.grupos.find((group) => {
      group.id === idconf
    }) === undefined) {
      return idconf
    } else {
      return this.generateId()
    }





  }

}


