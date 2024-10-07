import {computed, inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
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
import {Cell} from "../model/cell";


@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  GlobalService = inject(GlobalServiceService);
  ComponentArray = [
    new ComponentHolder('Calender',CalenderTileComponent , undefined , CellType.small, 120 , 120 , 0, 'auto',[0],{x:0 ,y:0}),
    new ComponentHolder('Clock',ClockTileComponent , undefined ,CellType.small, 120 , 120 ,1, 'auto',[1],{x:0 ,y:0}),
    new ComponentHolder('Profile', ProfileTileComponent, undefined , CellType.small,120 , 120 , 2, 'auto',[2],{x:0 ,y:0} ),
    new ComponentHolder('TickTackToe', TickTacToeTileComponent, undefined , CellType.small,120 , 120 , 3, 'auto',[3],{x:0 ,y:0} ),
    new ComponentHolder('Weather' , WeatherTileComponent, undefined ,CellType.small, 120 , 120 , 4, 'auto',[4],{x:0 ,y:0} ),
    new ComponentHolder('Quote' , QuoteComponent, undefined ,CellType.mid, 270 , 120 , 5, 'auto',[5,6],{x:0 ,y:0} ),
    new ComponentHolder('Linkedin' , LinkedinComponent, undefined ,CellType.small, 120, 120 , 7, 'auto',[7],{x:0 ,y:0} ),
    new ComponentHolder('Github' , GithubComponent, undefined , CellType.small,120, 120 , 8, 'auto',[8],{x:0 ,y:0} ),
    new ComponentHolder('Instagram' , InstagramComponent, undefined ,CellType.small, 120, 120 , 9, 'auto',[9],{x:0 ,y:0} ),
    new ComponentHolder('Mail' , MailComponent, undefined ,CellType.small, 120, 120 , 10, 'auto',[10],{x:0 ,y:0} ),
    new ComponentHolder('Resume' , ResumeComponent, undefined ,CellType.small, 120, 120 , 11, 'auto',[11],{x:0 ,y:0} ),

  ]
  allComponents:WritableSignal<ComponentHolder[]> = signal([])
  isFilled:Signal<CellType[]> = computed(()=> {
    let temp = new Array( this.GlobalService.numberOfElement()).fill(CellType.blank)
    this.allComponents().forEach(component=>{
      component.arrPos.forEach(pos => {
        temp[pos] = component.cType
      })
    })
    return temp
  })

  fillPosition(newPosition:number[] , index:number){
    newPosition.forEach(pos => {
      this.isFilled()[pos] = this.allComponents()[index].cType
    })
  }

  removePosition(index:number){
    this.allComponents()[index].arrPos.forEach(pos => {
      this.isFilled()[pos] = CellType.blank
    })

    console.log(this.isFilled())
  }


  getFreeSpace(leftPos: number, rightPos: number) {
    let element = leftPos == rightPos ? [leftPos]:[leftPos, rightPos];
    let spaceNeeded = leftPos == rightPos ? 1 : 2;
    let spaceFound = [];
    let bfsElement = [leftPos - 1, rightPos + 1];
    let bound = this.GlobalService.numberOfElement() - 1;

    while (spaceNeeded != spaceFound.length && bfsElement.length > 0) {
      let x = bfsElement.shift();
      console.log(x)
      if (x !== undefined && x >= 0 && x <= bound) {
        if (x < leftPos && x >= 0) {
          if (this.isFilled()[x] == CellType.blank) {
            spaceFound.push(x);
          } else {
            element.unshift(x);
          }
          bfsElement.push(x - 1);
        } else if (x > rightPos && x <= bound) {
          if (this.isFilled()[x] == CellType.blank) {
            spaceFound.push(x);
          } else {
            element.push(x);
          }
          bfsElement.push(x + 1);
        }
      }
    }

   this.gridRearrange(spaceFound , element , leftPos , rightPos)
  }


  isEmpyty(index:number , t:CellType){
    if (this.isFilled()[index] == CellType.blank){
      this.isFilled()[index] = t
      return true
    }
    return false
  }

  gridRearrange(space:number[], element:number[] , leftPos:number, rightPos:number){
    while(space.length > 0 && element.length > 0){
      let x = space.shift();
      if (x !== undefined && x < leftPos){
        let i = <number>element.unshift()
        let elementIndex = this.findElementAt(i)
        this.allComponents()[elementIndex].position = this.GlobalService.getPoint(x)
        this.isFilled()[x] = this.allComponents()[elementIndex].cType
        this.allComponents()[elementIndex].index = x
        if (i <= leftPos && i <= rightPos ){
        } else {
          space.push(i)
        }

      } else if (x !== undefined && x > rightPos){
        let i = <number>element.pop()
        let elementIndex = this.findElementAt(i)
        this.allComponents()[elementIndex].position = this.GlobalService.getPoint(x)
        this.isFilled()[x] = this.allComponents()[elementIndex].cType
        this.allComponents()[elementIndex].index = x
        if (i <= leftPos && i <= rightPos ){

        } else {
          space.push(i)
        }
      }
    }

    console.log(this.isFilled())
  }

  findElementAt(x:number){
    for(let i = 0 ; i < this.allComponents().length ; i++){
      let index = this.allComponents()[i].index
      if (index == x){
        return i
      }
    }
    return  -1
  }



  constructor() {
    this.ComponentArray.forEach((element:ComponentHolder) => {
      element.position = this.GlobalService.getPoint(element.index);
    })
    this.allComponents.set(this.ComponentArray);
  }














}
