import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';

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

  ngOnInit(): void {}

  // массив данных для диалогов
  getDialogs() {
    return this.dialogs;
  }
  // массив данных личного чата
  getPersonalMessage() {
    return this.storeMessage.getPersonalMessage();
  }
  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
  }
}
