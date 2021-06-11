import {AlbumsInterface} from "./albums-interface"

export interface DetailGroupInterface {

    id:number;
    name:string;
    imageUrl:string;
    biography:string;
    videoUrl:string;
    albums: AlbumsInterface[];

}
