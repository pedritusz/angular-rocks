import { Component, OnInit } from '@angular/core';
import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public rockService:RockService) {
    this.rockService.allGroups$.subscribe((x)=>{
      console.log('subscripcion',x)
    })
   }

  ngOnInit(): void {
    this.rockService.firstConfiguration()
    
  }


}
