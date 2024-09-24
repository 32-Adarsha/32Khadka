import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-tick-tac-toe-tile',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tick-tac-toe-tile.component.html',
  styleUrl: './tick-tac-toe-tile.component.css'
})
export class TickTacToeTileComponent {

  route = inject(Router)
}
