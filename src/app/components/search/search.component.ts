import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  
 getGroups(){
   
   if(this.searchText !== ""){
   
   }
 }
 
  searchText:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
