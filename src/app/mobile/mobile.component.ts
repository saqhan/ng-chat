import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import {AnimationService} from '../services/common/animation.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  constructor(private storeMessage: StoreService, private router: Router,
              private animSRVC: AnimationService) {}
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
    return (this.dialogs =
      detail.item.id !== 'all'
        ? this.storeMessage
            .getDialogs()
            .filter((item) => item.category === detail.item.id)
        : this.storeMessage.getDialogs());
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
    if (detail.place === 'showPersonalDialog') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['app-mobile-personal-chat']);
    }
  }
}
