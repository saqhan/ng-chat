import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../store-servic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comp-contacts',
  templateUrl: './comp-contacts.component.html',
  styleUrls: ['./comp-contacts.component.scss']
})
export class CompContactsComponent implements OnInit {

  constructor(private chatStore: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  dialogs = this.chatStore.getDialogs();

  /**
   * Категории диалогов
   */
  public getCategories() {
    return this.chatStore.getCategories();
  }

  public getDialogs() {
    return this.dialogs;
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

  /**
   *   клик по кнопке категорий для фильтрации диалогов
   */
  public clickToCategory({ detail }) {
    console.log(detail)
    return (this.dialogs =
      detail.item.id !== 'all'
        ? this.chatStore
          .getDialogs()
          .filter((item) => item.category === detail.item.id)
        : this.chatStore.getDialogs());
  }

}
