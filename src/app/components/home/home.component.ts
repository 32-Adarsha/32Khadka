import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragRelease, CdkDropList} from "@angular/cdk/drag-drop";
import {ArryModel} from "../../../model/arryModel";
import {GridService} from "../../../Services/grid.service";
import {GlobalServiceService} from "../../../Services/global-service.service";
import {CommonModule, NgOptimizedImage, NgStyle} from "@angular/common";
import {DragDropDirective} from "../../../GloblaDirective/drag-drop.directive";
import {CalenderTileComponent} from "../Calender/calender-tile/calender-tile.component";
import {FeedbackService} from "../../../Services/feedback.service";
import {ClockTileComponent} from "../Clock/clock-tile/clock-tile.component";
import {Input} from "postcss";
import {ComponentServiceService} from "../../../Services/component-service.service";
import {LoadComponentDirective} from "../../../GloblaDirective/load-component.directive";
import {GridComponent} from "../grid/grid.component";
import {RIVE_FOLDER, RiveModule} from 'ng-rive';
import {DisplaySettingComponent} from "../display-setting/display-setting.component";
import {WallpaperService} from "../../../Services/wallpaper.service";
import {CellType} from "../../../model/component-holder";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag, CommonModule, RiveModule, CdkDropList, NgStyle, DragDropDirective, CalenderTileComponent, ClockTileComponent, LoadComponentDirective, GridComponent, NgOptimizedImage, DisplaySettingComponent],
  providers: [{
    provide: RIVE_FOLDER,
    useValue: 'assets/rive',
  }],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




 // DI
  GridService  = inject(GridService);
  GlobalService = inject(GlobalServiceService);
  compService:ComponentServiceService = inject(ComponentServiceService)
  wallService = inject(WallpaperService)


  //Variable
  displaySetting  = false





  tgSetting(){
    this.displaySetting = !this.displaySetting;
  }

  drop(parentElm: HTMLElement, c: string, gridParent: HTMLElement , index:number , t:CellType) {
    let childElm = document.getElementById(c)!
    let newPosition = this.GridService.getNewPosition(childElm , parentElm ,t);
    let z = newPosition[0]
    if (!this.compService.isEmpyty(z ,t)){
      if (newPosition.length == 1){
        this.compService.getFreeSpace(newPosition[0],newPosition[0])
      } else if (newPosition.length == 2){
        this.compService.getFreeSpace(newPosition[0],newPosition[1])
      }
    }

    this.compService.fillPosition(newPosition ,index)

    const temp = gridParent.children[z] as HTMLElement;
    this.compService.allComponents()[index].position = {x:(temp.offsetLeft) , y:(temp.offsetTop)};
    this.compService.allComponents()[index].index = z;
    this.compService.allComponents()[index].arrPos = newPosition;
  }
  dragElement( parentElm:HTMLElement , c:string , gridParent:HTMLElement , t:CellType){
    let childElm = document.getElementById(c)!
    let newPosition = this.GridService.getNewPosition(childElm , parentElm, t);
    let z = newPosition[0]

    this.GridService.divOutline().pos = this.GlobalService.getPoint(z);
  }

  protected readonly Array = Array;
}
