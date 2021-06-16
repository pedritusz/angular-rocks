import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DetailGroupInterface } from 'src/app/interfaces/detail-group';



@Component({
  selector: 'app-item-group-list',
  templateUrl: './item-group-list.component.html',
  styleUrls: ['./item-group-list.component.scss']
})

export class ItemGroupListComponent implements OnInit {
  @Output()
  event : EventEmitter<object> = new EventEmitter();

  @Input()
  itemGroupList!: DetailGroupInterface;

  constructor() { }

  ngOnInit(): void { }

  clickAction( arg : string, data? : any ) {

    this.event.emit( {
      action : arg,
      data,
    })

  }

}
