import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-service.service';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {Observable} from "rxjs";
import {ChatCategoryInterface, ChatDialogInterface} from "../services/api-layer/res/interface/common.interface";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class CompComponent implements OnInit {
  // get contacts array




  /**
   * */
  public messages = this.chatStore.getMessages();


  constructor(private chatStore: StoreService, private router: Router) {}

  ngOnInit(): void {

  }

  /**
   * Иконки навигации
   */
  getNavItems() {
    return this.chatStore.getNavItems();
  }

  /**
   * Лого
   */
  getLogo() {
    return this.chatStore.getLogo();
  }

  /**
   * Сообщения
   */
  getMessages() {
    return this.messages;
  }

  /**
   * Стейт для переключения на личный чат
   */
  getDialogVisible() {
    return this.chatStore.dialogVisible;
  }

  /**
   * Стейт для переключения личного профиля
   */
  getProfileVisible() {
    return this.chatStore.profileVisible;
  }

  /**
   * Функция для показа личной переписки
   * @param detail
   */
  public clickToLink({ detail }) {
    if (detail.place === 'showPersonalDialog') {
      this.chatStore.dialogVisible = false;
    }
  }

  /**
   * Показ профиля юзера
   * @param detail
   */
  public toggleProfile({ detail }) {
    if (detail.place === 'userName') {
      this.chatStore.profileVisible = !this.chatStore.profileVisible;
    }
  }


  /**
   * Поиск сообщений
   * @param detail
   */
  public searchMessage({ detail }) {
    console.log('searchMessage 1 ', detail.data);
    return (this.messages =
      detail.data !== '' && detail.data !== null
        ? this.messages.filter((item) => {
            return typeof item.content === 'string'
              ? item.content.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.chatStore.getMessages());
  }


}

