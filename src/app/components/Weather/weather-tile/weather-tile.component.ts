import {Component, effect, inject} from '@angular/core';
import {WeatherService} from "../../../../Services/weather.service";
import {UrlCleanPipe} from "../../../../Pipes/url-clean.pipe";

@Component({
  selector: 'app-weather-tile',
  standalone: true,
  imports: [
    UrlCleanPipe
  ],
  templateUrl: './weather-tile.component.html',
  styleUrl: './weather-tile.component.css'
})
export class WeatherTileComponent {
   Weather  = inject(WeatherService)

}
