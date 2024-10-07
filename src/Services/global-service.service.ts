import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }

  HighlightPosition = 0;
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
