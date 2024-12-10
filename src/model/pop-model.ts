import {Type} from "@angular/core";
import {CellType} from "./component-holder";

export class PopModel {
  constructor(
    public name: string,
    public window: Type<any>,
    public  index: number,
   ){}
}
