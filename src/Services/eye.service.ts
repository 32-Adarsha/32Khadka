import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EyeService {

  howFar = 5.5
  constructor() { }

  getNewPoint(mouseX: number, mouseY: number , eyeX:number ,eyeY:number) {
    let distance = Math.sqrt((mouseX - eyeX)**2 +  (mouseY - eyeY)**2);
    let ratio = this.howFar/distance;

    let newX = ((1-ratio)*eyeX) + (ratio * mouseX)
    let newY = (1-ratio)*eyeY + (ratio * mouseY)

    return `translate(${newX - eyeX},${newY - eyeY})`;
  }

}
