import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }
  HighlightPosition = 0;
  widthOfScreen : WritableSignal<number> = signal(Math.round(window.innerWidth*(10/12)))
  heightOfScreen : WritableSignal<number> = signal(Math.round(window.innerHeight*(5/6)))
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



}
