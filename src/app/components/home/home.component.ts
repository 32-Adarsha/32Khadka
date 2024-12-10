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
import {PopService} from "../../../Services/pop.service";

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
export class HomeComponent implements AfterViewInit {




  // DI
  GridService  = inject(GridService);
  GlobalService = inject(GlobalServiceService);
  compService:ComponentServiceService = inject(ComponentServiceService)
  wallService = inject(WallpaperService)
  popService = inject(PopService);


  ngAfterViewInit() {
    this.compService.allComponents().forEach(component => {
      console.log(this.GridService.getNewPosition(document.getElementById('canvas')!,document.getElementById(component.name)! , component.cType))
    })
  }


  //Variable
  displaySetting  = false

  constructor() {
    if(this.GlobalService.userPreference.isNew){
      this.popService.changeSelection(2)
      this.popService.vis = true
      this.GlobalService.userPreference.isNew = false
    }
  }

  ifIsNew(){

  }



  tgSetting(){
    this.popService.vis = !this.popService.vis;
    this.popService.changeSelection(1);
  }

  drop(parentElm: HTMLElement, c: string, gridParent: HTMLElement , indexAtComponent:number , t:CellType) {
    let childElm = document.getElementById(c)!

    let newPosition = this.GridService.getNewPosition(childElm , parentElm ,t);
    this.compService.putTile(newPosition , indexAtComponent)
    // console.log(newPosition)
    // let z = newPosition[0]
    // // if (!this.compService.isEmpyty(z ,t)){
    // //   if (newPosition.length == 1){
    // //     this.compService.getFreeSpace(newPosition[0],newPosition[0] , indexAtComponent , newPosition)
    // //   } else if (newPosition.length == 2){
    // //     this.compService.getFreeSpace(newPosition[0],newPosition[1] , indexAtComponent , newPosition)
    // //   }
    // // } else {
    // //   this.compService.fillPosition(newPosition , indexAtComponent)
    // // }
  }

  dragElement( parentElm:HTMLElement , c:string , gridParent:HTMLElement , t:CellType){
    let childElm = document.getElementById(c)!

    let newPosition = this.GridService.getNewPosition(childElm , parentElm, t);
    let z = newPosition[0]
    this.GridService.divOutline().pos = this.GlobalService.getPoint(z);
  }

  protected readonly Array = Array;
  protected readonly console = console;
}
