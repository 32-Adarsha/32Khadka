import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {
  allWallpaper:{name:string , mininame:string}[] =[
    {name:'day.jpg', mininame:'day.png'},
    {name:'god.png' , mininame:'god.png'},
    {name:'mtfuji.png',mininame:'mtfuji.png'},
    {name:'night.jpg', mininame:'night.png'},
    {name:'japan.jpg', mininame:'japan.png'},
    {name:'east.png', mininame:'east.png'},
    {name:'peace.png', mininame:'peace.png'},
    {name:'bumpride.jpg',mininame:'bumpride.png'},
    {name:'heaven.jpg' , mininame:'heaven.png'}
  ]

  selectedWallpaper:WritableSignal<string> = signal('east.png')
  constructor() { }


  changeWallpaper(newWallpaper:string){
    this.selectedWallpaper.set(newWallpaper);
  }

}
