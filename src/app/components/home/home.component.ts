import {Component, inject, OnInit} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragRelease, CdkDropList} from "@angular/cdk/drag-drop";
import {ArryModel} from "../../../model/arryModel";
import {GridService} from "../../../Services/grid.service";
import {GlobalServiceService} from "../../../Services/global-service.service";
import {NgStyle} from "@angular/common";
import {DragDropDirective} from "../../GloblaDirective/drag-drop.directive";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgStyle , DragDropDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
 // DI
  GridService  = inject(GridService);
  GlobalService = inject(GlobalServiceService);


  //Variable
  displaySetting  = false
  timeoutId:any;
  timeoutId2:any;
  dragPosition = {x: 0, y: 0};


  tgSetting(){
    this.displaySetting = !this.displaySetting;
  }

  drop(parentElm: HTMLElement, childElm: HTMLElement, gridParent: HTMLElement) {
    let newPosition = this.GridService.getNewPosition(childElm , parentElm);
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    const temp = gridParent.children[z] as HTMLElement;
    this.dragPosition = {x: temp.offsetLeft, y: temp.offsetTop};
    this.GlobalService.arrOfelement()[z] = '';
  }
  dragElement( parentElm:HTMLElement , childElm:HTMLElement , gridParent:HTMLElement){
    let newPosition = this.GridService.getNewPosition(childElm , parentElm);
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    this.GlobalService.arrOfelement()[this.GlobalService.HighlightPosition] = '';
    this.GlobalService.arrOfelement()[z] = 'outline';
    this.GlobalService.HighlightPosition = z;
  }
  protected readonly Array = Array;

}
