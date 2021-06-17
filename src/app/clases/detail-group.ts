import { DetailGroupInterface } from "../interfaces/detail-group";

export class DetailGroupClass {
    constructor(outName:string,outBiography:string,outImage:string,outVideo:string,outAlbums:DetailGroupInterface[]){

   let  id = undefined;
   let name = outName?outName:'';
   let imageUrl = outImage?outImage:'';
   let biography = outBiography?outBiography:'';
   let videoUrl =outVideo?outVideo:'';
   let albums = outAlbums?outAlbums:[]; 

    }
    
  
}
