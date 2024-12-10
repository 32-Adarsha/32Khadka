import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {debounceTime, fromEvent, Subscription} from "rxjs";
import {GlobalServiceService} from "../Services/global-service.service";
import {ComponentServiceService} from "../Services/component-service.service";
import {ComponentHolder} from "../model/component-holder";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit , OnDestroy{
  title = '32Kiran';
  private resizeSubscription: Subscription | undefined;
  GlobalService = inject(GlobalServiceService)
  componentService = inject(ComponentServiceService)



  ngOnInit() {
    // Initial values
    this.GlobalService.widthOfScreen.set(Math.round((window.innerWidth)*10/12));
    this.GlobalService.heightOfScreen.set( Math.round((window.innerHeight)*5/6));

    // Create an observable from the resize event
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200) // Wait for 200ms pause in events
      )
      .subscribe(() => {
        this.GlobalService.widthOfScreen.set(Math.round((window.innerWidth)*10/12));
        this.GlobalService.heightOfScreen.set( Math.round((window.innerHeight)*5/6));
        console.log('Window resized! New dimensions:', this.GlobalService.widthOfScreen());
        this.componentService.ComponentArray.forEach((element:ComponentHolder) => {
          element.position = this.GlobalService.getPoint(element.index);
        })
        this.componentService.allComponents.set(this.componentService.ComponentArray);


      });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
