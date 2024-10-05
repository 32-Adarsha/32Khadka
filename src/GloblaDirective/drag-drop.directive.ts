import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
import {CellType} from "../model/component-holder";
import {GridService} from "../Services/grid.service";
import {GlobalServiceService} from "../Services/global-service.service";

@Directive({
  selector: '[appDragDrop]',
  standalone: true
})
export class DragDropDirective {
  @Input() type: CellType = CellType.small;
  @Input() pos = 0;
  timeOut:any;
  GridService = inject(GridService)
  GlobalService = inject(GlobalServiceService)
  constructor(private  el:ElementRef) {
    window.addEventListener('mouseup' , () => {
      clearTimeout(this.timeOut);
      this.el.nativeElement.classList.remove('addShadow');
    });

  }



  @HostListener('mousedown') onMouseDown(event: MouseEvent) {

    this.GridService.divOutline().pos = this.GlobalService.getPoint(this.pos);
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

  @HostListener('animationend') onanimationend(event: AnimationEvent) {
    this.el.nativeElement.classList.remove('bounceIn');
    clearTimeout(this.timeOut);
  }

  @HostListener('mouseup') onMouseUp(event: MouseEvent) {
    this.el.nativeElement.classList.remove('addShadow');
    this.GridService.divOutline().vis = 'hidden';
  }


}
