import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter, Input, OnChanges,
  OnInit, Output, SimpleChanges,
} from '@angular/core';
import { StoreService } from '../../../../store-service.service';
import { Router } from '@angular/router';
import {ChatCategoryInterface, ChatDialogInterface, filterDialogsBySearchValue} from 'stencil-chat';

@Component({
  selector: 'app-comp-dialogs',
  templateUrl: './comp-dialogs.component.html',
  styleUrls: ['./comp-dialogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompDialogsComponent implements OnInit, OnChanges {

  /**
   * */
  @Input() categories: ChatCategoryInterface[] = [];
  /**
   * */
  @Input() allDialogs: ChatDialogInterface[] = [];

  /**
   * */
  @Output() openDialog: EventEmitter<ChatDialogInterface> = new EventEmitter();

  /**
   * */
  public dialogs: ChatDialogInterface[] = [];

  /**
   * Тема для модульного/мобильного чата
   * */
  public theme: 'mobile' | 'module' | 'comp' = 'comp';

  constructor(
    private chatStore: StoreService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dialogs = this.allDialogs;
  }

  public compTheme() {
    return this.chatStore.compThemeClass;
  }

  public searchDialogs(value: string): void {
    this.dialogs = filterDialogsBySearchValue(
      value,
      this.allDialogs
    );
  }

  /**
   *   клик по кнопке категорий для фильтрации диалогов
   */
  public clickToCategory(input: ChatCategoryInterface) {
    this.dialogs = this.chatStore.filterChatsByCategory(input, this.allDialogs);
  }

  /**
   * */
  public openChat(dialog: ChatDialogInterface) {
    this.openDialog.emit(
      dialog
    )
  }
}
