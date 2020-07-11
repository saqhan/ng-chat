import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../store-service.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ChatCategoryInterface, ChatDialogInterface} from "stencil-chat";

@Component({
  selector: 'app-comp-contacts',
  templateUrl: './comp-contacts.component.html',
  styleUrls: ['./comp-contacts.component.scss']
})
export class CompContactsComponent implements OnInit {

  /**
   * */
  public dialogs$: Observable<ChatDialogInterface[]>;

  /**
   * */
  private dialogs: ChatDialogInterface[] = [];
  private allDialogs: ChatDialogInterface[] = [];

  constructor(private chatStore: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.chatStore.getDialogs().subscribe(
      (dataFromSever) => {
        this.allDialogs = this.dialogs =  dataFromSever;
      }
    )
  }

  /**
   * Категории диалогов
   */
  public getCategories() {
    return this.chatStore.getCategories();
  }

  public getDialogs() {
    return this.dialogs$;
  }


  public compTheme() {
    return this.chatStore.compThemeClass;
  }


  /**
   * Поиск контактов
   * */
  public searchContact({ detail }): void {
    if (detail.data !== '' && detail.data !== null) {
      this.dialogs = this.allDialogs.filter((item) => {
        return typeof item.name === 'string'
          ? item.name
            .toLocaleLowerCase()
            .includes(detail.data.toLowerCase())
          : false;
      })
    } else {
      this.dialogs = this.allDialogs;
    }
  }

  /**
   *   клик по кнопке категорий для фильтрации диалогов
   */
  public clickToCategory( input: ChatCategoryInterface) {
    console.log('clickToCategory', {input});
    if (input?.id !== 'all') {
      this.dialogs = this.allDialogs.filter((item) => item.category === input.id)
    } else {
      this.dialogs = this.allDialogs;
    }
  }

}
