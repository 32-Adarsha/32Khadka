import {Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef} from '@angular/core';
import {Dynamic} from "../model/dynamic";

@Directive({
  selector: '[appLoadComponent]',
  standalone: true
})
export class LoadComponentDirective implements OnInit , OnDestroy{
  @Input() component: Type<Dynamic> | undefined = undefined;
  constructor(private ViewContainerRef : ViewContainerRef) {}
  ngOnInit() {
    if(this.component){
      this.ViewContainerRef.createComponent<Dynamic>(this.component)
    }
  }
  ngOnDestroy() {
    this.ViewContainerRef.clear()
  }

}
