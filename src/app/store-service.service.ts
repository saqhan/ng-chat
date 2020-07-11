import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Message, MessageDirectionEnum, MessageTypeEnum} from 'stencil-chat';
import {CategoriesMock, ContactsMock, DialogsMock, MessageMock} from "./mock";
import {
  ChatCategoryInterface,
  ChatContactInterface,
  ChatDialogInterface
} from "./services/api-layer/res/interface/common.interface";
import {ApiLayerService} from "./services/api-layer/api-layer.service";

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public dialogVisible = true;

  public profileVisible = false;

  /**
   * */
  // public dialogs: ChatDialogInterface[] = DialogsMock;

  /**
   * */
  public categories: ChatCategoryInterface[] = CategoriesMock;

  public logo = {
    id: 'logo',
    logo: 'https://via.placeholder.com/100x100?text=Text',
  };

  public titleModule = {
    title: 'Модульный чат'
  };

  /**
   *
   * */
  public contacts: ChatContactInterface[] = ContactsMock;

  /**
   * Иконки навигации комп версии
   */
  public navItems = [
    {
      id: 1,
      icon: 'fas fa-comment-alt',
    },
    {
      id: 2,
      icon: 'fas fa-shopping-bag',
    },
    {
      id: 3,
      icon: 'fas fa-cart-arrow-down',
    },
    {
      id: 5,
      icon: 'fas fa-calendar-alt',
    },
    {
      id: 6,
      icon: 'fas fa-cog',
    },
  ];

  /**
   *
   * */
  private messages: Message[] = MessageMock;

  private messages$: BehaviorSubject<Message[]> = new BehaviorSubject(
    this.messages
  );

  constructor(
    private apiLayerService: ApiLayerService
  ) {}

  getDialogs() {
    return this.apiLayerService.getDialogs(
      ''
    )
  }

  getPersonalMessage() {
    return this.messages;
  }
  public getMessage$(): Observable<Message[]> {
    return this.messages$;
  }
  public sendMessage(message: Message) {
    this.messages$.pipe(take(1)).subscribe((messages) => {
      messages.push(message);
      this.messages$.next([...messages]);
    });
  }

  public sendTestTextMessage(content: string) {
    this.sendMessage({
      content,
      sender: {
        uid: 'test-id-1',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    });
  }

  getCategories() {
    return this.categories;
  }

  getMessages() {
    return this.messages;
  }

  getNavItems() {
    return this.navItems;
  }

  getLogo() {
    return this.logo;
  }

  getContacts() {
    return this.contacts;
  }

  compThemeClass = 'comp';

}
