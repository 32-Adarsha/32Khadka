import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {ComponentHolder} from "../../../model/component-holder";

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
   @Input() Tile:ComponentHolder[] = [];
}
