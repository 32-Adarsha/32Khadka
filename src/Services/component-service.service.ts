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
  isFilled:Signal<{name:string ,type:CellType , id:number}[]> = computed(()=> {
    let temp:{name:string ,type:CellType , id:number}[] = new Array( this.GlobalService.numberOfElement()).fill({name:"" ,type:CellType.blank, id:-1});
    for(let j=0; j < this.allComponents().length;j++){
      let c = this.allComponents()[j]
      this.allComponents()[j].arrPos.forEach(elementAt => {
        temp[elementAt] = {name:c.name , type:c.cType , id:j}
      })
    }
    return temp
  })



  removePosition(index:number){
    this.allComponents()[index].arrPos.forEach(pos => {
      this.isFilled()[pos] = {name:"" ,type:CellType.blank, id:-1}
      console.log(pos)
    })


  }


  getFreeSpace(leftPos: number, rightPos: number , indexAtComponent:number , newPosArr:number[]) {
    let passLeftPos = leftPos
    let spaceNeeded :number = leftPos == rightPos ? 1 : 2
    let spaceFound = []
    while(spaceNeeded > spaceFound.length){

      leftPos -= 1
      rightPos += 1
      if(leftPos >= 0){
        if (this.isFilled()[leftPos].type == CellType.blank){
          spaceFound.push(leftPos)

        }
      }

      if(spaceNeeded <= spaceFound.length){
        break
      }

      if (rightPos < this.GlobalService.numberOfElement()){

        if (this.isFilled()[rightPos].type == CellType.blank){
          spaceFound.push(rightPos)
        }
      }

      if(leftPos < 0 && rightPos >= this.GlobalService.numberOfElement()){
        break
      }
    }

    this.gridRearrange(spaceFound , passLeftPos , indexAtComponent , newPosArr)

  }
  isEmpyty(index:number , t:CellType){

    if (this.isFilled()[index].type == CellType.blank){
      return true
    }
    return false
  }
  gridRearrange(space:number[] , leftPos:number , indexAtComponent:number , newPosArr:number[]) {
      let y = this.isFilled();
      space.forEach(pos => {
        y.splice(pos , 1)
      })
      let z = {name:this.allComponents()[indexAtComponent].name , type:this.allComponents()[indexAtComponent].cType , id:indexAtComponent}
      y.splice(leftPos , 0 ,z )
      this.isFilled = signal<{ name: string , type: CellType ,id: number }[]>([...y])
      let i = 0;
      while(i < y.length){
        let isContained = !(y[i].type == CellType.blank)
        if(isContained){
          let idx:number = y[i].id

          if(y[i].type == CellType.small){
            this.allComponents()[idx].position = this.GlobalService.getPoint(i)
            this.allComponents()[idx].index = i
            this.allComponents()[idx].arrPos = [i]
          } else {
            let x = false

            this.allComponents()[idx].position = this.GlobalService.getPoint(i)
            this.allComponents()[idx].index = i
            this.allComponents()[idx].arrPos = [i , i+1]
            i++
          }
        }
        i+=1
      }


  }
  fillPosition(newPosArr:number[] , index:number ) {
    newPosArr.forEach(pos => {
      this.isFilled()[pos] = {name : this.allComponents()[index].name , type:this.allComponents()[index].cType , id:index} ;
    })
    this.allComponents()[index].position = this.GlobalService.getPoint(newPosArr[0])
    this.allComponents()[index].index = newPosArr[0]
    this.allComponents()[index].arrPos = newPosArr

  }
  isAtEdge(pos:number){
    let num = this.GlobalService.numberOfcol()
    return pos % num == num - 1
  }
  constructor() {
    this.ComponentArray.forEach((element:ComponentHolder) => {
      element.position = this.GlobalService.getPoint(element.index);
    })
    this.allComponents.set(this.ComponentArray);
  }














}
