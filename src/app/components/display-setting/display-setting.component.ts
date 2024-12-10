import {Component, inject} from '@angular/core';
import {WallpaperService} from "../../../Services/wallpaper.service";
import {GlobalServiceService} from "../../../Services/global-service.service";

enum displayOption {
  wallpaper,
  quote,
  Feature,
}


@Component({
  selector: 'app-display-setting',
  standalone: true,
  imports: [],
  templateUrl: './display-setting.component.html',
  styleUrl: './display-setting.component.css'
})
export class DisplaySettingComponent {

  wallservice = inject(WallpaperService)
  globalService = inject(GlobalServiceService)
  selected = displayOption.wallpaper
  previewWallpaper = 'day.jpg'
  onSelected(option:displayOption){
    this.selected = option;
  }

  isOutline(wallpaper:string){
    return wallpaper == this.previewWallpaper? 'solid' : 'none'
  }

  setPreview(wallpaper:string){
    this.previewWallpaper = wallpaper
  }

  scroll(element: HTMLElement , type:string) {
    if (type == "left"){
      element.scrollBy({
        left: 200, // Amount to scroll horizontally
        behavior: 'smooth' // Smooth scrolling
      });
    } else if (type == "right"){
      element.scrollBy({
        left: -200, // Amount to scroll horizontally
        behavior: 'smooth' // Smooth scrolling
      });
    }

  }

  protected readonly displayOption = displayOption;
  protected readonly WallpaperService = WallpaperService;
}
