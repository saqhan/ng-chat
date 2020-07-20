import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, SimpleChanges,} from '@angular/core';
import {StoreService} from '../store-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimationService} from '../services/common/animation.service';
import {
  ChatCategoryInterface,
  ChatContactInterface,
  ChatDialogInterface,
  filterDialogsBySearchValue,
} from 'stencil-chat';
import {ChatNavigateService} from "../chat-navigate.service";

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent implements OnInit {
  showFiller = false;

  /**
   * */
  public dialogs: ChatDialogInterface[] = [];

  /**
   * */
  public contacts: ChatContactInterface[] = [];

  /**
   * */
  private allDialogs: ChatDialogInterface[] = [];

  /**
   * */
  public categories: ChatCategoryInterface[] = [];

  /**
   * */
  public showDialogs = true;

  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService,
    private activatedRoute: ActivatedRoute,
    private chatNavigateService: ChatNavigateService,
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

    this.storeMessage.getContacts().subscribe((dataFromSever) => {
      this.contacts = dataFromSever;
      console.log(
        'contacts - dataFromSever',
        dataFromSever
      )
      this.cdRef.markForCheck();
    });

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.showDialogs = params['contact'] !== 'show'
      }
    )
  }

  // клик по кнопке категорий для фильтрации диалогов
  public clickToCategory(input: ChatCategoryInterface) {
    this.dialogs = this.storeMessage.filterChatsByCategory(
      input,
      this.allDialogs
    );
  }

  /**
  * */
  public cancelSearchPersonal() {
    this.dialogs = this.allDialogs;
  }


  // on click dialog
  public clickToDialog(dialog: ChatDialogInterface) {
    this.animSRVC.slideToLEFT();
    this.chatNavigateService.navigateToPersonalChat(
      dialog.id
    );
    // this.router.navigate(['app-mobile-personal-chat']);
  }


  /**
   * */
  public clickToShowDialogs() {
    this.animSRVC.slideToLEFT();
    this.router.navigate(['mobile']);
  }

  /**
   * */
  public clickToshowDialogs() {
    this.animSRVC.slideToLEFT();
    this.chatNavigateService.navigateToContact();
  }

  /**
   * */
  public clickToShowMenuBar() {
    console.log('clickToShowMenuBar');
  }

  /**
   * */
  public clickToAddDialog() {
    console.log('clickToAddDialog');
  }

  public clickToShowContacts()
  {
    this.chatNavigateService.navigateToContact();
  }

  /**
   * */
  public searchDialogs(value: string): void {
    this.dialogs = filterDialogsBySearchValue(
      value,
      this.allDialogs
    );
  }
}
