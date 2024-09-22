export class Cell {
    width: number = 0;
    height: number = 0;
    pos : Position = new Position(0, 0);
    background_image = '';
    linkToComponent = '';
}


export class Position {
  x:number = 0;
  y:number = 0;

  constructor(x:number, y:number){
    this.x = x;
    this.y = y;
  }
}
