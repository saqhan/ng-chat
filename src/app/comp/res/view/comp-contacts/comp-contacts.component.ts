import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { StoreService } from '../../../../store-service.service';
import { Router } from '@angular/router';
import { ChatCategoryInterface, ChatDialogInterface } from 'stencil-chat';

@Component({
  selector: 'app-comp-contacts',
  templateUrl: './comp-contacts.component.html',
  styleUrls: ['./comp-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompContactsComponent implements OnInit {
  // public dialogs$: Observable<ChatDialogInterface[]>;

  public dialogs: ChatDialogInterface[] = [];

  public categories: ChatCategoryInterface[] = [];

  private allDialogs: ChatDialogInterface[] = [];

  constructor(
    private chatStore: StoreService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chatStore.getDialogs().subscribe((dataFromSever) => {
      this.allDialogs = this.dialogs = dataFromSever;
      this.cdRef.markForCheck();
    });
    this.chatStore.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      this.cdRef.markForCheck();
    });
  }

  public compTheme() {
    return this.chatStore.compThemeClass;
  }

  public searchDialogs({ detail }): void {
    if (detail.data !== '' && detail.data !== null) {
      this.dialogs = this.allDialogs.filter((item) => {
        return typeof item.name === 'string'
          ? item.name.toLocaleLowerCase().includes(detail.data.toLowerCase())
          : false;
      });
    } else {
      this.dialogs = this.allDialogs;
    }
  }

  /**
   *   клик по кнопке категорий для фильтрации диалогов
   */
    public clickToCategory(input: ChatCategoryInterface) {
    this.dialogs = this.chatStore.filterChatsByCategory(input, this.allDialogs);
  }

  public toggleChat() {
    console.log(this.chatStore.dialogVisible);
    this.chatStore.dialogVisible = true;
  }
}
