import { Component } from '@angular/core';
import {ToMonthPipe} from "../../../../Pipes/to-month.pipe";
import {Dynamic} from "../../../../model/dynamic";

@Component({
  selector: 'app-calender-tile',
  standalone: true,
  imports: [ToMonthPipe],
  templateUrl: './calender-tile.component.html',
  styleUrl: './calender-tile.component.css'
})
export class CalenderTileComponent implements Dynamic{
  currentDate:Date = new Date();
  month = this.currentDate.getMonth() + 1;
  day = this.currentDate.getDate();
}
