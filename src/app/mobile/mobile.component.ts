import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import {StoreService} from '../store-service.service';
import {Router} from '@angular/router';
import {AnimationService} from '../services/common/animation.service';
import {ChatCategoryInterface, ChatDialogInterface,} from 'stencil-chat';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent implements OnInit {
  showFiller = false;

  public dialogs: ChatDialogInterface[] = [];

  private allDialogs: ChatDialogInterface[] = [];

  public categories: ChatCategoryInterface[] = [];

  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.storeMessage.getDialogs().subscribe((dataFromSever) => {
      this.allDialogs = this.dialogs = dataFromSever;
      this.cdRef.markForCheck();
    });

    this.storeMessage.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      this.cdRef.markForCheck();
    });
  }

  // клик по кнопке категорий для фильтрации диалогов
  public clickToCategory(input: ChatCategoryInterface) {
    this.dialogs = this.storeMessage.filterChatsByCategory(
      input,
      this.allDialogs
    );
  }

  // поиск диалогов
  public searchDialogs({ detail }): void {
    if (detail !== '' && detail !== null) {
      this.dialogs = this.allDialogs.filter((item) => {
        return typeof item.name === 'string'
          ? item.name.toLocaleLowerCase().includes(detail.toLowerCase())
          : false;
      });
    } else {
      this.dialogs = this.allDialogs;
    }
  }
  // Поиск контактов
  public cancelSearchPersonal() {
    this.dialogs = this.allDialogs;
  }

  // on click dialog
  public clickToDialog($event) {
    console.log('clickToDialog', $event.detail.data);
    this.animSRVC.slideToLEFT();
    this.router.navigate(['app-mobile-personal-chat']);
  }

  public clickToShowDialogs() {
    this.animSRVC.slideToLEFT();
    this.router.navigate(['mobile']);
  }
  public clickToShowContacts() {
    this.animSRVC.slideToLEFT();
    this.router.navigate(['contacts']);
  }
  public clickToShowMenuBar() {
    console.log('clickToShowMenuBar');
  }
  public clickToAddDialog() {
    console.log('clickToAddDialog');
  }
}
