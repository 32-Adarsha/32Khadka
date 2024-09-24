import {Type} from "@angular/core";

export class ComponentHolder {
  constructor(
    public name: string,
    public smTile: Type<any>,
    public bgTile: Type<any> | undefined,
    public width:number,
    public height:number ,
    public index:number,
    public position: { x:number, y:number } ){}
}


export interface Tile_if {
  smTile:Type<any>,
  bgTile:Type<any>,
  width:number,
  height:number,
  position:{x:number, y:number}
}
