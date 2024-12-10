import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PopService} from "../../../../Services/pop.service";
import {GlobalServiceService} from "../../../../Services/global-service.service";

enum SelectionType {
  Drag,
  Interactive,
  Wallpaper
}

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent implements OnInit , OnDestroy{
  popService = inject(PopService);
  currSelection: SelectionType = SelectionType.Drag
  globalService = inject(GlobalServiceService)

  constructor() {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  move(t:SelectionType) {
    this.currSelection = t;
  }

  tutorialFinish(){
    this.globalService.userPreference.isNew = false;
    this.globalService.setUserPreference();
    this.popService.vis = false;
  }


  protected readonly SelectionType = SelectionType;
}
