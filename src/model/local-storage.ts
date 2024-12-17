import {CellType, ComponentHolder} from "./component-holder";

export class LocalStorage {
  constructor(
    public isNew: boolean = true,
    public  wallpaper : string ,
    public component_orders:ComponentHolder[],
    public isFilled :{name:string ,type:CellType , id:number}[]
  ) {}
}
