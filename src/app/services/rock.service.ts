import { Injectable } from '@angular/core';
import { DetailGroupInterface } from '../interfaces/detail-group';

@Injectable({
  providedIn: 'root'
})
export class RockService {

groups: DetailGroupInterface[] | undefined;

getDetails(id:number){


}
  constructor() { 
    
  }
  deleteGroup(id:number){

  }
}


