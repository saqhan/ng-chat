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
import { Observable } from 'rxjs';
import {
  ChatCategoryInterface,
  chatConvertWritingStatusToMessage,
  ChatDialogInterface,
  ChatWritingUserInterface,
} from 'stencil-chat';

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
  public messages = this.chatStore.getMessages();

  constructor(private chatStore: StoreService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Стейт для показа контактов или диалогов
   */
  public showContactsOrDialogs = true;

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
   * Стейт для переключения личного профиля
   */
  getProfileVisible() {
    return this.chatStore.profileVisible;
  }

  /**
   * Стейт для переключения личного на личный чат
   */
  getDialogVisible() {
    return this.chatStore.dialogVisible;
  }

  /**
   * Показ профиля юзера
   * @param detail
   */
  public visibleProfile() {
    this.chatStore.profileVisible = !this.chatStore.profileVisible;
  }

  /**
   * Поиск сообщений
   * @param detail
   */
  public searchPersonalMessage({ detail }) {
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

  /**
   * Сброс поика сообщений
   */
  public resetMessagesFilter() {
    this.messages = this.chatStore.getMessages();
  }

  /**
   *
   */
  public getWriting = this.chatStore.writing;

  public chatConvertWritingStatusToMessage() {
    return chatConvertWritingStatusToMessage(this.getWriting[0]);
  }

  /**
   * Метод для переключения на контакты
   */
  public showContactsOrDialogsToggle() {
    this.showContactsOrDialogs = !this.showContactsOrDialogs;
    console.log(this.showContactsOrDialogs)
  }
}
