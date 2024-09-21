import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {debounceTime, fromEvent, Subscription} from "rxjs";
import {GlobalServiceService} from "../Services/global-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit , OnDestroy{
  title = 'personalPage';
  private resizeSubscription: Subscription | undefined;
  GlobalService = inject(GlobalServiceService)



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
      });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
