import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';
import {interval, Observable} from "rxjs";
import {Message} from "../comp/interface/common.interface";

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

  ngOnInit(): void {

    interval(5000).subscribe(
      (i) => {
        this.storeMessage.sendTestTextMessage(`Тестовое сообщение ${i}`);
        console.log(
          '',
          `Тестовое сообщение ${i}`
        )
      }
    )
  }

  // массив данных для диалогов
  getDialogs() {
    return this.dialogs;
  }

  /**
   *
   * */
  getPersonalMessage$(): Observable<Message[]> {
    // return this.storeMessage.getPersonalMessage();
    return this.storeMessage.getMessage$();
  }
  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
  }
}
