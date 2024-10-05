import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {CellType, ComponentHolder} from "../model/component-holder";
import {ClockTileComponent} from "../app/components/Clock/clock-tile/clock-tile.component";
import {CalenderTileComponent} from "../app/components/Calender/calender-tile/calender-tile.component";
import {GlobalServiceService} from "./global-service.service";
import {ProfileTileComponent} from "../app/components/Profile/profile-tile/profile-tile.component";
import {TickTacToeTileComponent} from "../app/components/TickTacToe/tick-tac-toe-tile/tick-tac-toe-tile.component";
import {WeatherTileComponent} from "../app/components/Weather/weather-tile/weather-tile.component";
import {QuoteComponent} from "../app/components/quote/quote/quote.component";
import {LinkedinComponent} from "../app/components/socialMedia/linkedin/linkedin.component";
import {GithubComponent} from "../app/components/socialMedia/github/github.component";
import {InstagramComponent} from "../app/components/socialMedia/instagram/instagram.component";
import {MailComponent} from "../app/components/socialMedia/mail/mail.component";
import {ResumeComponent} from "../app/components/socialMedia/resume/resume.component";


@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  GlobalService = inject(GlobalServiceService);
  temp = new Array( this.GlobalService.numberOfElement()).fill(false)
  ComponentArray = [
    new ComponentHolder('Calender',CalenderTileComponent , undefined , CellType.small, 120 , 120 , 0, {x:0 ,y:0}),
    new ComponentHolder('Clock',ClockTileComponent , undefined ,CellType.small, 120 , 120 ,1, {x:0 ,y:0}),
    new ComponentHolder('Profile', ProfileTileComponent, undefined , CellType.small,120 , 120 , 2, {x:0 ,y:0} ),
    new ComponentHolder('TickTackToe', TickTacToeTileComponent, undefined , CellType.small,120 , 120 , 3, {x:0 ,y:0} ),
    new ComponentHolder('Weather' , WeatherTileComponent, undefined ,CellType.small, 120 , 120 , 4, {x:0 ,y:0} ),
    new ComponentHolder('Quote' , QuoteComponent, undefined ,CellType.mid, 270 , 120 , 5, {x:0 ,y:0} ),
    new ComponentHolder('Linkedin' , LinkedinComponent, undefined ,CellType.small, 120, 120 , 7, {x:0 ,y:0} ),
    new ComponentHolder('Github' , GithubComponent, undefined , CellType.small,120, 120 , 8, {x:0 ,y:0} ),
    new ComponentHolder('Instagram' , InstagramComponent, undefined ,CellType.small, 120, 120 , 9, {x:0 ,y:0} ),
    new ComponentHolder('Mail' , MailComponent, undefined ,CellType.small, 120, 120 , 10, {x:0 ,y:0} ),
    new ComponentHolder('Resume' , ResumeComponent, undefined ,CellType.small, 120, 120 , 11, {x:0 ,y:0} ),

  ]
  allComponents:WritableSignal<ComponentHolder[]> = signal([])
  isFilled:WritableSignal<boolean[]> = signal(new Array(this.GlobalService.numberOfElement()).fill(false))

  constructor() {
    this.temp = new Array( this.GlobalService.numberOfElement()).fill(false)
    this.ComponentArray.forEach((element:ComponentHolder) => {
      element.position = this.GlobalService.getPoint(element.index);
    })
    this.isFilled.set(this.temp)
    this.allComponents.set(this.ComponentArray);
  }

  fillIndex(index:number , T:CellType){
    if(T == CellType.small ){
      this.temp[index] = true;
    } else if (T == CellType.mid ){
      this.temp[index] = true;
      this.temp[index+1] = true;
    } else {
      this.temp[index] = false;
    }
  }


  isEdge(index:number){

  }









}
