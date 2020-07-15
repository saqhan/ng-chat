import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CategoriesMock, ContactsMock, MessageMock, Writing } from './mock';
import { ApiLayerService } from './services/api-layer/api-layer.service';
import {
  ChatCategoryInterface,
  ChatContactInterface,
  ChatDialogInterface,
  ChatMessage,
  ChatMessageDirectionEnum,
  ChatMessageTypeEnum,
  ChatWritingUserInterface,
} from 'stencil-chat';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private apiLayerService: ApiLayerService) {}
  public dialogVisible = false;

  public profileVisible = false;

  /**
   * */
  // public dialogs: ChatDialogInterface[] = DialogsMock;

  /**
   * */
  // public categories: ChatCategoryInterface[] = CategoriesMock;

  public logo = {
    id: 'logo',
    logo: 'https://via.placeholder.com/100x100?text=Text',
  };

  public titleModule = {
    title: 'Модульный чат',
  };

  /**
   *
   * */
  public contacts: ChatContactInterface[] = ContactsMock;

  /**
   *
   */
  public writing: ChatWritingUserInterface[] = Writing;

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
  private messages: ChatMessage[] = MessageMock;

  private messages$: BehaviorSubject<ChatMessage[]> = new BehaviorSubject(
    this.messages
  );

  public compThemeClass = 'comp';

  getDialogs() {
    return this.apiLayerService.getDialogs('');
  }

  getPersonalMessage() {
    return this.messages;
  }
  public getMessage$(): Observable<ChatMessage[]> {
    return this.messages$;
  }
  public sendMessage(message: ChatMessage) {
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
      type: ChatMessageTypeEnum.text,
      direction: ChatMessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    });
  }

  /**
   * */
  public getCategories(): Observable<ChatCategoryInterface[]> {
    return this.apiLayerService.getCategories('');
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

  /**
   *
   */
  public filterChatsByCategory(
    input: ChatCategoryInterface,
    allDialogs: ChatDialogInterface[]
  ) {
    if (input?.id !== 'all') {
      return allDialogs.filter((item) => item.category === input.id);
    } else {
      return allDialogs;
    }
  }
}
