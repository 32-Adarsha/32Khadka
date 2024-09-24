import {AfterViewInit, Component, inject} from '@angular/core';
import {GlobalServiceService} from "../../../Services/global-service.service";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements AfterViewInit{
  GlobalService = inject(GlobalServiceService);
  protected readonly Array = Array;

  ngAfterViewInit(): void {
    console.log('Test')
  }

}
