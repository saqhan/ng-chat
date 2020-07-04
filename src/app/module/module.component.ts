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

  moduleVisible = false;

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
    return this.moduleVisible;
  }

  public closeModule() {
    this.moduleVisible = false;
  }
  public toggleShowModule({ detail }) {
    if (detail.place === 'toggleShowChat') {
      return (this.moduleVisible = !this.moduleVisible);
    }
  }

  getPersonalMessage$(): Observable<Message[]> {
    // return this.storeMessage.getPersonalMessage();
    return this.storeMessage.getMessage$();
  }
  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
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

}
