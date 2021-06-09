import { Component, OnInit } from '@angular/core';
import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public rockService:RockService) { }

  ngOnInit(): void {
    this.rockService.firstConfiguration()
  }

}
