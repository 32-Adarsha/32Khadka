import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {LoadComponentDirective} from "../../../GloblaDirective/load-component.directive";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    LoadComponentDirective
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
    @Input() child:any;
}
