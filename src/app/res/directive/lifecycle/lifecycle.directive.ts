import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[lifecycle]'
})
export class LifecycleDirective  implements AfterViewInit{

  @Output('afterViewInit') afterViewInit: EventEmitter<{el: ElementRef}> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.afterViewInit.emit(
      {
        el: this.el
      }
    );
  }

}
