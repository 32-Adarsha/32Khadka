export class LocalStorage {
  constructor(
    public isNew: boolean = true,
    public  wallpaper : string ,
    public component_orders:{name:string , index:number}[]
  ) {}
}
