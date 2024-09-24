import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TicTacToeComponent} from "./components/TickTacToe/tic-tac-toe/tic-tac-toe.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home details'
  },
  {
    path: 'tictactoe',
    component:TicTacToeComponent,
    title: 'Tic Tac Toe'
  }
];
