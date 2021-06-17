import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

import { DetailGroupClass } from 'src/app/clases/detail-group';
import { DetailGroupInterface } from 'src/app/interfaces/detail-group';
import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data: DetailGroupInterface = {
    id: 0,
    name:"",
    biography:'',
    albums:[],
    imageUrl:"",
    videoUrl:" ",
  };
  albums:DetailGroupClass[]=[];


  newGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    biography: new FormControl('',[Validators.required]),
    video: new FormControl(''),
    image: new FormControl(''),
    album: new FormControl('',[Validators.minLength(2)])

  })

  constructor(public rockService:RockService) { }

  ngOnInit(): void {
    
    
  }
  deleteAlbum($album:any){
    console.log($album)
    this.data.albums.splice(parseInt($album),1)
    console.log(this.albums)
  }
  addAlbum(){

    this. data.albums.push(this.newGroup.value['album'] as never)
    this.newGroup.patchValue({album:' '})

  }
  submit(){
    
    this.data.name =this.newGroup.value['name'];
    this.data.biography = this.newGroup.value['biography']   
    this.data.imageUrl = this.newGroup.value['image']   
    this.data.videoUrl = this.newGroup.value['video']

    
    this.rockService.setNewGroup(this.data as DetailGroupInterface)

  }

}
