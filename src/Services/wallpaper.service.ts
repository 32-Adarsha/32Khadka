import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {
  allWallpaper:string[] =[
    'day.jpg',
    'god.png',
    'mtfuji.png',
    'night.jpg',
    'japan.jpg',
    'east.png',
    'peace.png',
    'bumpride.jpg',
  ]

  selectedWallpaper:WritableSignal<string> = signal('east.png')
  constructor() { }


  changeWallpaper(newWallpaper:string){
    this.selectedWallpaper.set(newWallpaper);
  }

}
