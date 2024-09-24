import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
  standalone: true
})
export class DragDropDirective {
  timeOut:any;
  constructor(private  el:ElementRef) {
    window.addEventListener('mouseup' , () => {
      clearTimeout(this.timeOut);
      this.el.nativeElement.classList.remove('addShadow');
    });

  }



  @HostListener('mousedown') onMouseDown(event: MouseEvent) {
    this.timeOut = setTimeout(() => {
      this.el.nativeElement.classList.add('bounceIn');
      this.el.nativeElement.classList.add('addShadow');
    }, 1000);
  }

  @HostListener('animationend') onanimationend(event: AnimationEvent) {
    this.el.nativeElement.classList.remove('bounceIn');
    clearTimeout(this.timeOut);
  }

  @HostListener('mouseup') onMouseUp(event: MouseEvent) {
    this.el.nativeElement.classList.remove('addShadow');
  }


}
