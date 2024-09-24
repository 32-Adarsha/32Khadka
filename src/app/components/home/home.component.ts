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
  binService:FeedbackService = inject(FeedbackService);
  compService:ComponentServiceService = inject(ComponentServiceService)
  wallService = inject(WallpaperService)


  //Variable
  displaySetting  = false
  timeoutId:any;
  timeoutId2:any;
  dragPosition = {x: 0, y: 0};




  tgSetting(){
    this.displaySetting = !this.displaySetting;
  }

  drop(parentElm: HTMLElement, c: string, gridParent: HTMLElement , index:number) {
    let childElm = document.getElementById(c)!
    let newPosition = this.GridService.getNewPosition(childElm , parentElm);
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    const temp = gridParent.children[z] as HTMLElement;
    this.compService.allComponents()[index].position = {x:(temp.offsetLeft) , y:(temp.offsetTop)};
    this.compService.allComponents()[index].index = z;
    this.GlobalService.arrOfelement()[z] = '';
  }
  dragElement( parentElm:HTMLElement , c:string , gridParent:HTMLElement){
    let childElm = document.getElementById(c)!
    let newPosition = this.GridService.getNewPosition(childElm , parentElm);
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    this.GlobalService.arrOfelement()[this.GlobalService.HighlightPosition] = '';
    this.GlobalService.arrOfelement()[z] = 'outline';
    this.GlobalService.HighlightPosition = z;
  }


  geteyeposition(){
    let item = this.GridService.getDivPosition(document.getElementById('left_eye')!)
    console.log(item)
  }

  protected readonly Array = Array;
}
