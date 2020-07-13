import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StoreService} from '../store-service.service';
import {Router} from '@angular/router';
import {AnimationService} from '../services/common/animation.service';
import {ChatCategoryInterface, ChatDialogInterface, ChatClickToLinkEmit} from "stencil-chat";
// import {ChatClickToLinkEmit} from "stencil-chat";
// import {ChatClickToLinkEmit, ChatLinkTypeEnum} from "../../../../stencil-chat/src";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileComponent implements OnInit {
  showFiller = false;

  /**
   * */
  public dialogs: ChatDialogInterface[] = [];

  /**
   * */
  private allDialogs: ChatDialogInterface[] = [];

  /**
   * */
  public categories: ChatCategoryInterface[] = [];


  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.storeMessage.getDialogs().subscribe(
      (dataFromSever) => {
        this.allDialogs = this.dialogs =  dataFromSever;
        this.cdRef.markForCheck();
      }
    )

    this.storeMessage.getCategories().subscribe(
      (dataFromSever) => {
        this.categories = dataFromSever;
        this.cdRef.markForCheck();
      }
    )
  }

  // клик по кнопке категорий для фильтрации диалогов
  public clickToCategory( input: ChatCategoryInterface) {
    this.dialogs = this.storeMessage.filterChatsByCategory(
      input,
      this.allDialogs
    )
  }

  // клик по ссылке
  public clickToLink(detail: ChatClickToLinkEmit ) {
    this.animSRVC.slideToLEFT();
    this.router.navigate(['app-mobile-personal-chat']);
    // if (detail.place === ChatLinkTypeEnum.showPersonalDialog) {
    //   this.animSRVC.slideToLEFT();
    //   this.router.navigate(['app-mobile-personal-chat']);
    // }
    // if (detail.place === ChatLinkTypeEnum.contacts) {
    //   this.animSRVC.slideToLEFT();
    //   this.router.navigate(['contacts']);
    // }
    // if (detail.place === 'menu-bar') {
    //   console.log('menu-bar');
    // }
  }

  // Поиск контактов

  public searchContact({ detail }) {
    // console.log('searchContact', detail.data);
    // return (this.dialogs =
    //   detail.data !== '' && detail.data !== null
    //     ? this.dialogs.filter((item) => {
    //         return typeof item.name === 'string'
    //           ? item.name.toLowerCase().includes(detail.data.toLowerCase())
    //           : false;
    //       })
    //     : this.storeMessage.getContacts());
    return [];
  }

  public clickToDialog ($event)
  {

  }
  // Поиск контактов

  // public searchContact({detail}) {
  //   console.log('searchMessage 1 ', detail.data);
  //   return (this.messages =
  //     detail.data !== '' && detail.data !== null
  //       ? this.messages
  //         .filter((item) => {
  //           return (typeof item.content === 'string' )
  //             ? (item.content).toLowerCase().includes(detail.data.toLowerCase())
  //             : false;
  //         } )
  //       : this.storeMessage.getMessages() );
  // }
}
