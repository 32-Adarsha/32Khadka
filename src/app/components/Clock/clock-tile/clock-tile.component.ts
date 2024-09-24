import {Component, ElementRef, inject} from '@angular/core';
import {ClockService} from "../../../../Services/clock.service";
import {Dynamic} from "../../../../model/dynamic";

@Component({
  selector: 'app-clock-tile',
  standalone: true,
  imports: [],
  templateUrl: './clock-tile.component.html',
  styleUrl: './clock-tile.component.css'
})
export class ClockTileComponent implements Dynamic{
  clockService:ClockService = inject(ClockService);
}
