import {Component, inject} from '@angular/core';
import {WallpaperService} from "../../../Services/wallpaper.service";

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
  selected = displayOption.wallpaper

  onSelected(option:displayOption){
    this.selected = option;
  }

  isOutline(wallpaper:string){
    return wallpaper == this.wallservice.selectedWallpaper() ? 'solid' : 'none'
  }

  protected readonly displayOption = displayOption;
  protected readonly WallpaperService = WallpaperService;
}
