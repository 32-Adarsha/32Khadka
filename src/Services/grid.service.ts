import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor() { }



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


  public getPosition(x:number , y:number):{x:number, y:number} {
    x = Math.round((x-75)/150)
    y = Math.round((y-75)/150)
    console.log(x, y)
    return {
      x : x,
      y : y,
    }
  }
}
