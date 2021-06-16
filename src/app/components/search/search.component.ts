
import { Component, OnInit, Output, EventEmitter } from '@angular/core';






@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})




export class SearchComponent implements OnInit {

 @Output() $emition : EventEmitter<any> = new EventEmitter();

 searchText:string = "";
  


 
  
  constructor() { }

  ngOnInit(): void {
   
  }

 getGroups(){


  
  this.$emition.emit(this.searchText)
 
 }
}
