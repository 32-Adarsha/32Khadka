import {Component, inject} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDragRelease, CdkDropList} from "@angular/cdk/drag-drop";
import {ArryModel} from "../../../model/arryModel";
import {GridService} from "../../../Services/grid.service";
import {GlobalServiceService} from "../../../Services/global-service.service";
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag, CdkDropList, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 // DI
  GridService  = inject(GridService);
  GlobalService = inject(GlobalServiceService);
  styl = {

  }

  //Variable
  displaySetting  = false

  dragPosition = {x: 0, y: 0};

  tgSetting(){
    this.displaySetting = !this.displaySetting;
  }



  drop(e:CdkDragRelease , parentElm:HTMLElement , childElm:HTMLElement , gridParent:HTMLElement) {
    let child = this.GridService.getDivPosition(childElm);
    let parent  = this.GridService.getDivPosition(parentElm)
    let newPosition = this.GridService.getPosition(child.centerX - parent.x , child.centerY - parent.y)
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    const temp = gridParent.children[z] as HTMLElement;
    this.dragPosition = {x: temp.offsetLeft, y: temp.offsetTop};
  }

  dragElement(e:CdkDragRelease , parentElm:HTMLElement , childElm:HTMLElement , gridParent:HTMLElement){
    let child = this.GridService.getDivPosition(childElm);
    let parent  = this.GridService.getDivPosition(parentElm)
    let newPosition = this.GridService.getPosition(child.centerX - parent.x , child.centerY - parent.y)
    let z = this.GlobalService.numberOfcol()*newPosition.y + newPosition.x;
    const temp = gridParent.children[z] as HTMLElement;
  }




  protected readonly Array = Array;
  protected readonly console = console;
}
