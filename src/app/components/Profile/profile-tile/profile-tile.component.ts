import {AfterViewInit, Component, inject, OnDestroy} from '@angular/core';
import {GridService} from "../../../../Services/grid.service";
import {EyeService} from "../../../../Services/eye.service";

@Component({
  selector: 'app-profile-tile',
  standalone: true,
  imports: [],
  templateUrl: './profile-tile.component.html',
  styleUrl: './profile-tile.component.css'
})
export class ProfileTileComponent implements AfterViewInit , OnDestroy{
  GridService = inject(GridService)
  EyeService = inject(EyeService);
  leftEyePos = 'translate(0px , 0px)'
  rightEyePos = 'translate(0px , 0px)'
  boundMMove: (event: MouseEvent) => void;

  constructor() {
    this.boundMMove = this.mMove.bind(this);
  }

  ngAfterViewInit(): void {

    document.addEventListener('mousemove' ,  this.boundMMove);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove' ,  this.boundMMove);
  }

  mMove(event:MouseEvent){
    let posEyeLeft = this.GridService.getDivPosition(document.getElementById('lEye')!)
    let posEyeRight = this.GridService.getDivPosition(document.getElementById('rEye')!)
    this.leftEyePos = this.EyeService.getNewPoint(event.x,event.y,posEyeLeft.centerX , posEyeLeft.centerY)
    this.rightEyePos = this.EyeService.getNewPoint(event.x,event.y,posEyeRight.centerX , posEyeRight.centerY)
  }


}
