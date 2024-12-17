import {inject, Injectable} from '@angular/core';
import {CellType, ComponentHolder} from "../model/component-holder";
import {GlobalServiceService} from "./global-service.service";


@Injectable({
  providedIn: 'root'
})
export class RearrangeService {
  position: CellType[][] = [[]]
  rowSize = 0
  colSize = 0

  GlobalService = inject(GlobalServiceService)

  constructor(rowSize: number, colSize: number) {
    this.position = new Array(rowSize)
      .fill(null)
      .map(() => new Array(colSize).fill(CellType.blank))
    this.rowSize = rowSize
    this.colSize = colSize
  }




}
