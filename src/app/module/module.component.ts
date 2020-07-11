import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-service.service';
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


  getMessages() {
    return this.storeMessage.getMessages();
  }

  ngOnInit(): void {
    // interval(5000).subscribe((i) => {
    //   this.storeMessage.sendTestTextMessage(`Тестовое сообщение ${i}`);
    //   console.log('', `Тестовое сообщение ${i}`);
    // });
  }

  // массив данных для диалогов
  getDialogs() {
    return this.storeMessage.getDialogs();
  }
  getCategories() {
    return this.storeMessage.getCategories();
  }

  getPersonalMessage() {
    return this.storeMessage.getPersonalMessage();
  }

  public getTitleModule() {
    return this.storeMessage.titleModule;
  }

  getPersonalMessage$(): Observable<Message[]> {
    // return this.storeMessage.getPersonalMessage();
    return this.storeMessage.getMessage$();
  }
}
