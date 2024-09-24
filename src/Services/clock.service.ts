import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  currentTime = Date.now();
  date = new Date(this.currentTime);
  hour:number = this.date.getHours();
  minutes = this.date.getMinutes();
  seconds = this.date.getSeconds();


  getHoursAngle(){
    const total = this.hour*60*60 + this.minutes*60 + this.seconds;
    return (((total/(12*60*60)) * 360) - 90) % 360 + "deg";

  }
  getMinuteAngle(){
    const total =  this.minutes*60 + this.seconds;
    return (((total/(60*60)) * 360) - 90 ) % 360 + "deg";
  }

  getSecondsAngle(){
    return (((this.seconds/60) * 360) - 90) %360 + "deg";
  }

}
