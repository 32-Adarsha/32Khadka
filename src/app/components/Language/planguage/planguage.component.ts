import { Component } from '@angular/core';
import {CdkDrag} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-planguage',
  standalone: true,
  imports: [
    CdkDrag
  ],
  templateUrl: './planguage.component.html',
  styleUrl: './planguage.component.css'
})
export class PlanguageComponent {
  allLanguages = ['kotlin' , 'chash' , 'cpp','typescript' , 'html' , 'javascript' , 'python' ,'go2']
}
