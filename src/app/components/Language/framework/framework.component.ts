import { Component } from '@angular/core';

@Component({
  selector: 'app-framework',
  standalone: true,
  imports: [],
  templateUrl: './framework.component.html',
  styleUrl: './framework.component.css'
})
export class FrameworkComponent {
  allFrameWork = ['android' , 'angular' , 'django','docker' , 'dotnet' , 'git' , 'react']

}
