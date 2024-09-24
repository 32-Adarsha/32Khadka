import {Component, signal, WritableSignal} from '@angular/core';
import {SIGNAL} from "@angular/core/primitives/signals";
import {single} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

enum state {
  menu,
  won,
  playing
}

enum Turn {
  x ='x',
  o = 'o'
}

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  tttgrid : WritableSignal<string[]> =  signal(new Array(9).fill(''))
  gameStatus:state = state.menu
  whoseTurn = Turn.x
  winner : WritableSignal<boolean> = signal(false)
  displayMenu:WritableSignal<boolean> = signal(true);


  winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  private route: any;

  constructor(route:Router) {
    this.route = route;
  }

  resetGrid(){
    this.tttgrid.set(new Array(9).fill(''))
  }

  onClickPlay(){
    this.gameStatus = state.playing
    this.displayMenu.set(false)
    this.winner.set(false)
  }

  onGameFinish(){
    this.gameStatus = state.menu
  }

  checkWin(){
    let won = false
    let winner:string = ''
    this.winConditions.forEach(condition => {
      const [a,b,c]  = condition
      if(this.tttgrid()[a] != '' && this.tttgrid()[a] == this.tttgrid()[b] && this.tttgrid()[a] == this.tttgrid()[c]){
          won = true;
          winner = this.tttgrid()[a]
      }
    })

    return {'won':won, 'winner':winner}

  }

  checkDraw(){
    let count= 0
    this.tttgrid().forEach(element => {
        if(element == ''){
          count++
        }

    })

    return count == 0 ? true : false
  }


  updateContent(index:number){
    console.log(index)
    if (this.tttgrid()[index] === '' && !this.winner()){
      let newArray = this.tttgrid()
      newArray[index] = this.whoseTurn
      this.tttgrid.set(newArray)
      this.whoseTurn = this.whoseTurn == Turn.x ? Turn.o : Turn.x;
      let data = this.checkWin()
      if(data.won){
        setTimeout(()=> {
          this.winner.set(true)
          alert(`${data.winner} won the game`)
          this.resetGrid()
          this.displayMenu.set(true)
        } , 100)

      } else if(this.checkDraw()){
        setTimeout(()=> {
          this.winner.set(true)
          alert(`Draw`)
          this.resetGrid()
          this.displayMenu.set(true)
        } , 100)
      }
    }else {

    }
  }

  onExit(){
    this.route.navigate([''])
  }


  protected readonly Turn = Turn;
}
