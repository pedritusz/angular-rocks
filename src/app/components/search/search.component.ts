import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  
 getGroups(){
   if(this.searchText !== ""){
   // funcion del servicio encargada de filtrar
   }
 }
 
  searchText:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
