import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../store-service.service';
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

  public showInputSearch = false;
  public showDropDown = false;

  public messages = this.storeMessage.getMessages();

  public getWriting() {
    return this.storeMessage.writing;
    console.log(this.storeMessage.writing);
  }

  ngOnInit(): void {}

  getMessages() {
    return this.messages;
  }

  public onClickMenuDots() {
    this.showDropDown = !this.showDropDown;
  }

  public turnOffShowInputSearch() {
    this.showInputSearch = false;
  }
  /**
   * переключение показа инпута поиски в личных сообщениях
   **/
  public toggleShowInputSearch() {
    this.showInputSearch = !this.showInputSearch;
    this.showDropDown = false;
  }

  public cancelSearchPersonal() {
    this.messages = this.storeMessage.getMessages();
  }

  public clickToShowDialogs() {
    this.animSRVC.slideToRIGHT();
    this.router.navigate(['mobile']);
  }

  public clickToUserProfile() {
    this.animSRVC.slideToLEFT();
    this.router.navigate(['profile']);
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

  public searchContact({ detail }) {
    // console.log('searchMessage 1 ', detail.data);
    return (this.messages =
      detail.data !== '' && detail.data !== null
        ? this.messages.filter((item) => {
            return typeof item.content === 'string'
              ? item.content.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.storeMessage.getMessages());
  }

  /*
   * Поиск сообщений
   */
  public searchPersonalMessages({ detail }) {
    console.log('searchPersonalMessages', detail.data);
    return (this.messages =
      detail.data !== '' && detail.data !== null
        ? this.messages.filter((item) => {
            return typeof item.content === 'string'
              ? item.content.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.storeMessage.getMessages());
  }
}
