import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../store-servic.service';
import { Router } from '@angular/router';
import { AnimationService } from '../../../../services/common/animation.service';

@Component({
  selector: 'app-mobile-personal-chat',
  templateUrl: './mobile-personal-chat.component.html',
  styleUrls: ['./mobile-personal-chat.component.scss'],
})
export class MobilePersonalChatComponent implements OnInit {
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService
  ) {}

  mobileTheme = 'mobile';

  ngOnInit(): void {}

  getMessages() {
    return this.storeMessage.getMessages();
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLinkBack', detail);
    if (detail.place === 'showDialogs') {
      this.animSRVC.slideToRIGHT();
      this.router.navigate(['mobile']);
    }
    if (detail.place === 'user-name-personal') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['profile']);
    }
  }

}
