import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  tgSetting(elem1:HTMLElement , elem2:HTMLElement){

    console.log("Test");
    if (elem1.style.display == 'none'){
      elem1.style.display = 'flex';
      elem2.style.display = 'flex';
    } else {
      elem1.style.display = 'none';
      elem2.style.display = 'none';
    }
  }




}
