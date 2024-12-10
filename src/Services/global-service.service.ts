import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {LocalStorage} from "../model/local-storage";

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  defaultPreference = new LocalStorage(true,'east.png' , [])
  userPreference = this.defaultPreference
  resized : WritableSignal<number> = signal(0)
  constructor() {
    if (localStorage.getItem('preference') != null){
      this.userPreference = JSON.parse(localStorage.getItem('preference')!);
    }else{
      this.userPreference = this.defaultPreference
      localStorage.setItem('preference', JSON.stringify(this.userPreference));
    }

  }

  setUserPreference(){
    localStorage.setItem('preference', JSON.stringify(this.userPreference));
  }
  setUserWallpaper(wallpaper:string){
    this.userPreference.wallpaper = wallpaper;
    this.setUserPreference()
  }

  setUserComponentOrder(order:{name:string , index:number}[]){
    this.userPreference.component_orders = order;
    this.setUserPreference()
  }


  widthOfScreen : WritableSignal<number> = signal(Math.round(window.innerWidth*(10/12)))
  heightOfScreen : WritableSignal<number> = signal(Math.round(window.innerHeight*(5/6)))
  width:Signal<string> = computed(()=> {
    return Math.floor(this.widthOfScreen() /  150)*150 + "px"
  })
  height:Signal<string> = computed(()=> {
    return Math.floor(this.heightOfScreen() /  150)*150 + "px"
  })
  numberOfcol : Signal<number> = computed(() => {
    return Math.floor(this.widthOfScreen() / 150)
  })
  numberOfElement: Signal<number>  = computed( () => {
    let x = Math.floor(this.widthOfScreen() / 150)
    let y = Math.floor(this.heightOfScreen() / 150)
    return x*y;
  })
  arrOfelement: Signal<string[]> = computed(() => {
    return new Array( this.numberOfElement()).fill("");
  })

  getPoint(x:number){
    let noRow = Math.floor(this.widthOfScreen() /  150)
    let noCol = Math.floor(this.heightOfScreen() / 150)
    let x_cord = Math.floor(x/noRow )*150
    let y_cord = (x % noRow)*150
    return {x:y_cord , y:x_cord}
  }






}
