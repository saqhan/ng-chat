import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-service.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  showFiller = false;
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService
  ) {}
  // массив данных личного чата
  dialogs = this.storeMessage.getDialogs();

  ngOnInit(): void {}

  // массив данных для диалогов
  getDialogs() {
    return this.dialogs;
  }

  // получаем категории
  getCategories() {
    return this.storeMessage.getCategories();
  }

  // клик по кнопке категорий для фильтрации диалогов
  public clickToCategory({ detail }) {
    // return (this.dialogs =
    //   detail.item.id !== 'all'
    //     ? this.storeMessage
    //         .getDialogs()
    //         .filter((item) => item.category === detail.item.id)
    //     : this.storeMessage.getDialogs());
    return [];
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    if (detail.place === 'showPersonalDialog') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['app-mobile-personal-chat']);
    }
    if (detail.place === 'contacts') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['contacts']);
    }
    if (detail.place === 'menu-bar') {
      console.log('menu-bar');
    }
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
