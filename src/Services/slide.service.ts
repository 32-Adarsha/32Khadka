import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {


  constructor() { }

  certificate :{name:string , discription:string}[] = [{name:'codepath' , discription:'Codepath 2024'} , {name:'coursera' , discription:'Coursera 2023'} ]
  selected = 0
  blueFirst : WritableSignal<string> = signal("bg-blue-400")
  blueSecond : WritableSignal<string> = signal("bg-blue-200")
  opa = "hidden"
  slideValue = 0

  onclickLeft(courseal:HTMLElement){
    this.slideValue = 0
    courseal.classList.remove('moveLeftAnimation')
    if (this.selected == 1){
      this.selected = 0;
      courseal.classList.add('moveRightAnimation')
      this.blueFirst.set("bg-blue-400")
      this.blueSecond.set("bg-blue-200")
    }
  }

  onclickRight(courseal:HTMLElement){
    courseal.classList.remove('moveRightAnimation')
    if (this.selected == 0){
      this.selected = 1;
      courseal.classList.add('moveLeftAnimation')
      this.blueFirst.set("bg-blue-200")
      this.blueSecond.set("bg-blue-400")
    }
  }

  onOver(){
    this.opa = "block"
  }

  onLeave(){
    this.opa = "hidden"
  }
}
