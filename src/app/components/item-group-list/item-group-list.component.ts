import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemGroupListInterface } from '../../interfaces/item-group-list.interface';
import { RockService } from '../../services/rock.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-item-group-list',
  templateUrl: './item-group-list.component.html',
  styleUrls: ['./item-group-list.component.scss']
})

export class ItemGroupListComponent implements OnInit {
  @Output()
  event : EventEmitter<string> = new EventEmitter();
  @Input()
  itemGroupList!: ItemGroupListInterface;
  constructor() { }

  ngOnInit(): void {

  }

  clickAction(arg: string) {
    this.event.emit(arg)
  }

  



}
