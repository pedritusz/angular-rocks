import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { DetailGroupClass } from 'src/app/clases/detail-group';
import { DetailGroupInterface } from 'src/app/interfaces/detail-group';
import { RockService } from 'src/app/services/rock.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  id = this.activateRoute.snapshot.params.id ? parseInt(this.activateRoute.snapshot.params.id) : undefined;
  
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
    name: new FormControl("",[Validators.required,Validators.minLength(2)]),
    biography: new FormControl('',[Validators.required]),
    video: new FormControl(''),
    image: new FormControl(''),
    album: new FormControl('',[Validators.minLength(2)])
    

  })

  constructor(public rockService:RockService,public router:Router,public activateRoute:ActivatedRoute,public domSanitize:DomSanitizer) { }

  ngOnInit(): void {
   
    if(this.id){
     
      
      this.rockService.data.map((group)=>{
        if(group.id === this.id){
          this.data = group
          
          
          this.newGroup.patchValue({name:group.name,biography:group.biography,video:this.data.videoUrl, Image:group.imageUrl })
         
        }
      })
      
    }
    
    
  }

  deleteAlbum($album:any){
    
    this.data.albums.splice(parseInt($album),1)
    
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
    this.router.navigate([''])

  }

}
