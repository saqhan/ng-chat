import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';
import { interval, Observable } from 'rxjs';
import { Message } from 'stencil-chat';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService
  ) {}
  // массив данных личного чата
  dialogs = this.storeMessage.getDialogs();
  personalMessage = this.storeMessage.getPersonalMessage();

  showChat = true;
  mobileTheme = 'mobile';

  messages = this.storeMessage.getMessages();

  selectClick = 1;
  getMessages() {
    return this.messages;
  }

  public selectChat = () => this.selectClick;

  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLink', detail.place);
    if (detail.place === 'showDialogs') {
      return this.selectClick = 1;
    }
    if (detail.place === 'showPersonalDialog') {
      return this.selectClick = 2;
    }
    if (detail.place === 'showFile') {
      return this.selectClick = 3;
    }
  }

  ngOnInit(): void {
    // interval(5000).subscribe((i) => {
    //   this.storeMessage.sendTestTextMessage(`Тестовое сообщение ${i}`);
    //   console.log('', `Тестовое сообщение ${i}`);
    // });
  }

  // массив данных для диалогов
  getDialogs() {
    return this.dialogs;
  }

  getPersonalMessage() {
    return this.personalMessage;
  }

  getModuleVisible() {
    return this.showChat;
  }

  public closeModule(item) {
    console.log(item);
    this.showChat = false;
  }
  public toggleShowModule({ detail }) {
    if (detail.place === 'toggleShowChat') {
      return (this.showChat = !this.showChat);
    }
  }

  public getTitleModule(){
    return this.storeMessage.titleModule;
  }

  getPersonalMessage$(): Observable<Message[]> {
    // return this.storeMessage.getPersonalMessage();
    return this.storeMessage.getMessage$();
  }

  // public searchContact({ detail }) {
  //   console.log('searchContact', detail.data);
  // }

  // Поиск контактов
  public searchDialogs({ detail }) {
    // console.log('searchContact', this.dialogs);
    return (this.dialogs =
      detail.data !== '' && detail.data !== null
        ? this.dialogs.filter((item) => {
            return typeof item.name === 'string'
              ? item.name.toLowerCase().includes(detail.data.toLowerCase())
              : false;
          })
        : this.storeMessage.getDialogs());
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
}
