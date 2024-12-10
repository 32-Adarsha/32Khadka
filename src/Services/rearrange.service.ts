import { Injectable } from '@angular/core';
import {CellType, ComponentHolder} from "../model/component-holder";


@Injectable({
  providedIn: 'root'
})
export class RearrangeService {
  position: CellType[][] = [[]]
  rowSize = 0
  colSize = 0

  constructor(rowSize: number, colSize: number) {
    this.position = new Array(rowSize)
      .fill(null)
      .map(() => new Array(colSize).fill(CellType.blank))
    this.rowSize = rowSize
    this.colSize = colSize
  }

  fillCell(arr:ComponentHolder[]){
      arr.forEach(item => {
        switch (item.cType){
          case CellType.big:

        }
      })
  }

  getPosition(type:CellType , position:number){

  }

  getCord(point:number){
    point += 1
    let size = this.rowSize
    let x = Math.floor(point/size)
    let y: number = point % size
    return {x:x,y:y}
  }

  fillCellBig(position:number){
    let pos = this.getCord(position)
  }





  rearrange_2x2(pos:number[]){}
  rearrange_1x1(pos:number[]){}
  rearrange_2x1(pos:number[]){}
  rearrange_1x2(pos:number[]){}


  getFreeSpace(){

  }

  moveElement(type:CellType , pos:number){

  }

}
