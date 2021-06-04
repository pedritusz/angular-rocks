import { Component, OnInit, Output } from '@angular/core';

import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  
 getGroups(){
   if(this.searchText !== ""){
   console.log(this.searchText)
   }
 }
 
  searchText:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
