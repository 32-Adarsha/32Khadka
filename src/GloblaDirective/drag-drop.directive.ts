import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
import {CellType} from "../model/component-holder";
import {GridService} from "../Services/grid.service";
import {GlobalServiceService} from "../Services/global-service.service";
import {ComponentServiceService} from "../Services/component-service.service";

@Directive({
  selector: '[appDragDrop]',
  standalone: true
})
export class DragDropDirective {
  @Input() type: CellType = CellType.small;
  @Input() pos = 0;
  @Input() indx:number = 0;
  timeOut:any;
  GridService = inject(GridService)
  GlobalService = inject(GlobalServiceService)
  compService = inject(ComponentServiceService)
  constructor(private  el:ElementRef) {
    window.addEventListener('mouseup' , () => {
      clearTimeout(this.timeOut);
      this.el.nativeElement.classList.remove('addShadow');
      this.GridService.divOutline().vis = 'hidden';
      this.compService.allComponents()[this.indx].zIndex = 'auto';
    });

  }



  @HostListener('mousedown') onMouseDown(event: MouseEvent) {
    this.GridService.divOutline().pos = this.GlobalService.getPoint(this.pos);
    this.compService.allComponents()[this.indx].zIndex = 120;
    this.timeOut = setTimeout(() => {
      this.el.nativeElement.classList.add('bounceIn');
      this.el.nativeElement.classList.add('addShadow');

      this.GridService.divOutline().vis = 'visible';
      if (this.type == CellType.small){
        this.GridService.divOutline().width = 120;
      } else if (this.type == CellType.mid ){
        this.GridService.divOutline().width = 270;
      }
    }, 1000);





  }
  @HostListener('dragstart') onDragStart(event: MouseEvent) {
    console.log("Test")
    this.compService.allComponents()[this.indx].arrPos.forEach(pos => {
      console.log(pos)
    })
  }
  @HostListener('animationend') onanimationend(event: AnimationEvent) {
    this.el.nativeElement.classList.remove('bounceIn');

    clearTimeout(this.timeOut);
  }

  @HostListener('mouseup') onMouseUp(event: MouseEvent) {
    this.el.nativeElement.classList.remove('addShadow');
    this.compService.allComponents()[this.indx].zIndex = 'auto';
    this.GridService.divOutline().vis = 'hidden';
  }


}
