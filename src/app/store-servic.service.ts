import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Message, MessageDirectionEnum, MessageTypeEnum} from 'stencil-chat';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public dialogVisible = true;

  public profileVisible = false;

  public dialogs = [
    {
      id: 1,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'generate lazy started',
      time: {
        created: new Date(),
      },
      category: 'family',
      online: true,
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'generate lazy finished in 141 ms',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: true,
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'transpile started',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: false,
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: false,
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'family',
      online: true,
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Chrome',
      mess: 'Hello everyone!!! category',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Chrome',
      mess: 'Generate lazy started',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
  ];

  public categories = [
    {
      name: 'All',
      id: 'all',
    },
    {
      name: 'Work',
      id: 'work',
    },
    {
      name: 'Family',
      id: 'family',
    },
    {
      name: 'Friends',
      id: 'friends',
    },
  ];

  public logo = {
    id: 'logo',
    logo: 'https://via.placeholder.com/100x100?text=Text',
  };

  public titleModule = {
    title: 'Модульный чат'
  };

  public contacts = [
    {
      id: 1,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'R',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Harry Sutton',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Matthew Jake Sanchez',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Isaac Jack King',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Joseph Samuel Johnson',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Mike Vazovski',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Dominic Mason',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Blake David',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Joseph Samuel Johnson',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Alejandro Kyle Jenkins',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 11,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Hunter Joshua Coleman',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 12,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Jordan Isaiah Martinez',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
  ];

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


  public MessageMock: Message[] = [
    {
      content: 'Привет, как дела?',
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
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
    },
    {
      content: 'Олег подключился к чату',
      sender: {
        uid: '',
        icon: '',
        name: '',
        phone: '',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.center,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'https://via.placeholder.com/500',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.image,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
        delivery: new Date(),
        read: new Date(),
      },
    },
    {
      content: 1593606947701,
      sender: {
        uid: '',
        icon: '',
        name: '',
        phone: '',
      },
      type: MessageTypeEnum.date,
      direction: MessageDirectionEnum.center,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Все гуд!',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
        delivery: new Date(),
        read: new Date(),
      },
    },
    {

      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
        read: new Date(),
      },
    },
    {
      content: 'https://via.placeholder.com/500',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.image,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Где ты?',
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
    },
    {
      content: 'Чат пилю',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Прикинь, я тоже',
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
    },
    {
      content: "",
      sender: {
        uid: 'test-id-1',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.loading,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    },
  ];

  private messages$: BehaviorSubject<Message[]> = new BehaviorSubject(
    this.MessageMock
  );

  getDialogs() {
    return this.dialogs;
  }

  getPersonalMessage() {
    return this.MessageMock;
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
    return this.MessageMock;
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
}
