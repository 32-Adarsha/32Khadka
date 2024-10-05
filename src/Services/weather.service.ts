import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  lat  = 37.215519
  lng:number = -93.292358
  temp = 0;
  icon:Signal<string> = computed(()=> {
    return `./weatherIcon/animated/${this.condition()}.svg`
  })
  apiUrl:string = 'https://weatherapi-com.p.rapidapi.com/current.json';
  condition:WritableSignal<string> = signal('');
  is_day :number = 1;
  is_loaded:WritableSignal<boolean> = signal(false);


  constructor() {
    this.getWeather()
  }

  getWeather(){
    axios.get(this.apiUrl, {
      params:{
        q: `${this.lat},${this.lng}`,
      },
      headers: {
        'x-rapidapi-key': '57d6e47713msh5c49bbb509b7420p155099jsn66b55501b6fb',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      },
    }).then(
      (response) => {
        this.is_day = response.data.current.is_day;
        this.temp = Math.floor(response.data.current.temp_f);
        this.condition.set(this.categorizeWeather(response.data.current.condition.text));
        this.is_loaded.set(true)
      }
    ).catch((error) => {
      console.log("error", error);
      console.log(error);
    });
  }

  categorizeWeather(condition:string) {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "day";
      case "clear":
        return "night";
      case "partly cloudy":
        return "sunAndCloud";
      case "cloudy":
      case "overcast":
        return "cloudy";
      case "patchy rain possible":
      case "light rain shower":
      case "moderate or heavy rain shower":
        return "sunAndRain";
      case "patchy light drizzle":
      case "light drizzle":
      case "patchy light rain":
      case "light rain":
        return "lRain";
      case "moderate rain at times":
      case "moderate rain":
        return "mRain";
      case "heavy rain at times":
      case "heavy rain":
      case "torrential rain shower":
        return "hRain";
      case "patchy snow possible":
      case "patchy light snow":
      case "light snow showers":
        return "sunAndSnow";
      case "light snow":
        return "lSnow";
      case "patchy moderate snow":
      case "moderate snow":
      case "moderate or heavy snow showers":
        return "mSnow";
      case "patchy heavy snow":
      case "heavy snow":
      case "blowing snow":
      case "blizzard":
        return "hSnow";
      case "patchy freezing drizzle possible":
      case "freezing drizzle":
      case "heavy freezing drizzle":
      case "light freezing rain":
      case "moderate or heavy freezing rain":
        return "fRain";
      case "thundery outbreaks possible":
      case "patchy light rain with thunder":
      case "moderate or heavy rain with thunder":
      case "patchy light snow with thunder":
      case "moderate or heavy snow with thunder":
        return "thunder";
      default:
        return "sunAndCloud2";
    }
  }


}
