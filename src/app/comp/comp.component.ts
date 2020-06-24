import { Component, OnInit } from '@angular/core';
import {StoreService} from "../store-servic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  constructor(private chatStore: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

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

  public clickToLink({detail}) {
    if(detail.place === 'showPersonalDialog') {
      this.chatStore.dialogVisible = false;
    }
  }
}
/**
 * Метод, который выводит необходимый чат
 * @param content
 */
// public showChat (content){
//   switch (content) {
//     case 'showChat':
//       return <s-adam-direct message={MessageMock}></s-adam-direct>;
//     case 'noChat':
//       return <s-adam-select-chat></s-adam-select-chat>;
//   }
// }
