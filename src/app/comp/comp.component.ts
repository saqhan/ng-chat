import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
  constructor(private chatStore: StoreService, private router: Router) {}
  // get contacts array

  dialogs = this.chatStore.getDialogs();

  messages = this.chatStore.getMessages();

  ngOnInit(): void {}

  public getDialogs() {
    return this.dialogs;
  }

  getNavItems() {
    return this.chatStore.getNavItems();
  }

  getLogo() {
    return this.chatStore.getLogo();
  }

  getMessages() {
    return this.messages;
  }

  getDialogVisible() {
    return this.chatStore.dialogVisible;
  }

  getProfileVisible() {
    return this.chatStore.profileVisible;
  }

  public clickToLink({ detail }) {
    if (detail.place === 'showPersonalDialog') {
      this.chatStore.dialogVisible = false;
    }
  }

  public toggleProfile({ detail }) {
    if (detail.place === 'userName') {
      this.chatStore.profileVisible = !this.chatStore.profileVisible;
    }
  }

  /**
   * Поиск контактов
   * */

  public searchContact({ detail }) {
    return (this.dialogs =
      detail.data !== '' && detail.data !== null
        ? this.dialogs.filter((item) => {
            return typeof item.name === 'string'
              ? item.name
                  .toLocaleLowerCase()
                  .includes(detail.data.toLowerCase())
              : false;
          })
        : this.chatStore.getDialogs());
  }

  // Поиск контактов
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
