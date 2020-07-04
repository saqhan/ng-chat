import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
  animations: [
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(100%)' }),
      animate(200)
    ]),
    transition('* => void', [
      animate(200, style({ transform: 'translateX(100%)' }))
    ])
  ])
]
})
export class CompComponent implements OnInit {
  constructor(private chatStore: StoreService, private router: Router) {}

  ngOnInit(): void {}
  getNavItems() {
    return this.chatStore.getNavItems();
  }

  getLogo() {
    return this.chatStore.getLogo();
  }

  getDialogs() {
    return this.chatStore.getDialogs();
  }

  getMessages() {
    return this.chatStore.getMessages();
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

}
