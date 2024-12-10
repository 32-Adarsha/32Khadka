import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {SlideService} from "../../../../Services/slide.service";

@Component({
  selector: 'app-big-certificate',
  standalone: true,
  imports: [],
  templateUrl: './big-certificate.component.html',
  styleUrl: './big-certificate.component.css'
})
export class BigCertificateComponent implements OnInit , OnDestroy{

  slideService = inject(SlideService)
  previousState = 0

  ngOnDestroy(): void {
      if (this.previousState != this.slideService.selected) {
        if (this.previousState == 0){
          this.slideService.slideValue = -100
        } else {
          this.slideService.slideValue = 100
        }
      }else {
        this.slideService.slideValue = 0
      }
  }

  ngOnInit(): void {
    this.previousState = this.slideService.selected
    if(this.slideService.selected == 0){
      this.slideService.slideValue = 0
    } else {
      this.slideService.slideValue = -100
    }
  }

}
