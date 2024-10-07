import {Type} from "@angular/core";

export class ComponentHolder {
  constructor(
    public name: string,
    public smTile: Type<any>,
    public bgTile: Type<any> | undefined,
    public cType: CellType,
    public width:number,
    public height:number ,
    public index:number,
    public zIndex:number|string,
    public arrPos:number[],
    public position: { x:number, y:number } ){}
}


export enum CellType {
  small,
  mid,
  big,
  blank
}
