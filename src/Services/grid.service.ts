import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {GlobalServiceService} from "./global-service.service";
import {CellType} from "../model/component-holder";

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }
  GlobalService = inject(GlobalServiceService)
  divOutline:WritableSignal<{ pos: { x:number , y:number } , width:number , height:number , vis:string }> = signal({
    pos:this.GlobalService.getPoint(0),
    width:120,
    height:120,
    vis:'hidden',
  })
  public getDivPosition(element : HTMLElement) {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left,
      y: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      centerX: (rect.left + rect.right)/2,
      centerY: (rect.top + rect.bottom)/2,
      width: rect.width,
      height: rect.height
    };
  }
  public getNewPosition(childElm:HTMLElement , parentElm:HTMLElement, t:CellType) {
    let child = this.getDivPosition(childElm);
    let parent  = this.getDivPosition(parentElm);
    let newPosition = this.getPosition(child.centerX - parent.x , child.centerY - parent.y , t);
    return newPosition;
  }
  public getPosition(x:number , y:number , t:CellType) {
    if (t == CellType.small){return this.getPosTileSmall(x,y)}
    else if (t == CellType.mid){return this.getPosTileMid(x,y)}
    else{return this.getPosTileBig(x,y)}
  }
  getPosTileSmall(x:number, y:number){
    x = Math.round((x-75)/150)
    y = Math.round((y-75)/150)
    return [this.getZ(x,y)]
  }
  getPosTileMid(x:number, y:number) {
    let lx = Math.round((x-150)/150)
    let ly = Math.round((y-75)/150)
    return [this.getZ(lx, ly) , this.getZ(x,ly)]
  }
  getPosTileBig(x:number, y:number) {
    let a1 = [Math.round((x-150)/150) , Math.round((y-150)/150)];
    let a2 = [x , Math.round((y-150)/150)];
    let a3 = [Math.round((x-150)/150) ,y];
    let a4 = [x, y];

    return [this.getZ(a1[0] , a1[1]), this.getZ(a2[0] , a2[1]) , this.getZ(a3[0] , a3[1]) , this.getZ(a4[0] , a4[1]) ];
  }
  getZ(x:number, y:number) {
    return this.GlobalService.numberOfcol()*y + x;
  }
  public gridRearrange(current_pos:number){

  }



}
