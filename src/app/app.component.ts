import { Component } from '@angular/core';
import {  trigger,  query,  transition,  style,  animate,  state,  group} from '@angular/animations';
import { AnimationService } from './services/common/animation.service';

import {  slideToLeft,  slideToRight,  slideToTop,  slideToBottom} from './services/common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    trigger('routeTransition', [
      transition('* => slideToLeft', slideToLeft),
      transition('* => slideToRight', slideToRight),
      transition('* => slideToTop', slideToTop),
      transition('* => slideToBottom', slideToBottom),
      transition('* => slideToLeftDuplicate', slideToLeft),
      transition('* => slideToRightDuplicate', slideToRight),
      transition('* => slideToTopDuplicate', slideToTop),
      transition('* => slideToBottomDuplicate', slideToBottom),
    ]),
  ],
})
export class AppComponent {
  title = 'ng-chat';

  constructor(private animSRVC: AnimationService) {}

  getAnimation() {
    return this.animSRVC.getCurrentAnimation();
  }
}
