import {Component, inject} from '@angular/core';
import {PopService} from "../../../../Services/pop.service";
import {SlideService} from "../../../../Services/slide.service";

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  popService = inject(PopService)
  slideService  = inject(SlideService);
  certificate :{name:string , discription:string}[] = [{name:'coursera' , discription:'Coursera 2023'},{name:'codepath' , discription:'Codepath 2024'}  ]

  onExpandClick(){
    this.popService.changeSelection(0)
    this.popService.vis = true
  }

}
