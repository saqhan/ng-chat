import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../../store-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AnimationService} from '../../../../services/common/animation.service';
import {ChatNavigateService} from "../../../../chat-navigate.service";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
  ChatMessage,
  ChatUserActionStatusState,
  ChatUserPresenceState, filterMessageBySearchValue,
  scrollToBot
} from "stencil-chat";
import {ChatViewEnum} from "../../../../comp/res/enum/common.enum";

@Component({
  selector: 'app-mobile-personal-chat',
  templateUrl: './mobile-personal-chat.component.html',
  styleUrls: ['./mobile-personal-chat.component.scss'],
})
export class MobilePersonalChatComponent implements OnInit {
  @ViewChild('chatMessagesContainer') chatMessagesContainer: ElementRef<HTMLElement>;

  /**
   * */
  public mobileTheme = 'mobile';

  /**
   * */
  public showInputSearch = false;

  /**
   * */
  public showDropDown = false;

  /**
   * */
  public messages: ChatMessage[] = [];

  /**
   * */
  public allMessages: ChatMessage[] = [];

  /**
   *
   */
  public chatActionState: ChatUserActionStatusState;

  /**
   *
   */
  public chatPresenceState: ChatUserPresenceState;

  /**
   * */
  public openedDialog: ChatDialogInterface;

  /**
   * */
  public showProfile = true;


  /**
   * */
  public categories: ChatCategoryInterface[] = [];

  constructor(
    private storeMessage: StoreService,
    private chatNavigateService: ChatNavigateService,
    private router: Router,
    private animSRVC: AnimationService,
    private cdRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.startSyncMessage();

    this.storeMessage.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      this.cdRef.markForCheck();
    });


    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.showProfile = params['profile'] === 'show'
        this.cdRef.markForCheck();
      }
    )

    this.activatedRoute.params.subscribe(
      (params) => {
        if (params['chatId']) {
          this.storeMessage.getDialog(parseInt(params['chatId'] , 10)).subscribe(
            (dialogFromServer) => {
              if (dialogFromServer) {
                this.openedDialog = dialogFromServer;
                this.setChatState(dialogFromServer.online);
                this.cdRef.markForCheck();
              }
            }
          )
        }
      }
    )
  }

  /**
   * */
  private setChatState (
    online: boolean
  )
  {
    this.chatActionState = !online ? undefined : ChatUserActionStatusState.writing;
    this.chatPresenceState = this.chatActionState !== undefined ? ChatUserPresenceState.online : ChatUserPresenceState.offline;
  }

  public startSyncMessage (): void
  {
    this.storeMessage.getMessages$().subscribe(
      (messagesFromServer) => {
        this.messages = this.allMessages =  messagesFromServer;
        this.cdRef.markForCheck();
      }
    )
  }

  public chatConvertWritingStatusToMessage() {
    // return chatConvertWritingStatusToMessage(this.getWriting[0]);
  }

  getMessages() {
    return this.messages;
  }

  public onClickMenuDots() {
    this.showDropDown = !this.showDropDown;
  }

  public turnOffShowInputSearch() {
    this.showInputSearch = false;
  }
  /**
   * переключение показа инпута поиски в личных сообщениях
   **/
  public toggleShowInputSearch() {
    this.showInputSearch = !this.showInputSearch;
    this.showDropDown = false;
  }

  public cancelSearchPersonal() {
    // this.messages = this.storeMessage.getMessages$();
  }

  public clickToShowDialogs() {
    this.animSRVC.slideToRIGHT();
    this.chatNavigateService.navigateToChats();
  }

  public clickToUserProfile() {
    this.animSRVC.slideToLEFT();
    this.visibleProfile(true)
    // this.router.navigate(['profile']);
  }

  /**
   * Поиск сообщений
   * @param detail
   */
  public searchPersonalMessage(value: string) {
    this.messages = filterMessageBySearchValue(
      value,
      this.allMessages
    );
  }

  /**
   * Сброс поика сообщений
   */
  public resetMessagesFilter() {
    this.messages = this.allMessages;
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    console.log('clickToLinkBack', detail);
    if (detail.place === 'showDialogs') {
      this.animSRVC.slideToRIGHT();
      this.router.navigate(['mobile']);
    }
    if (detail.place === 'user-name-personal') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['profile']);
    }
  }

  public searchContact({ detail }) {
    // console.log('searchMessage 1 ', detail.data);
    return [];
    // return (this.messages =
    //   detail.data !== '' && detail.data !== null
    //     ? this.messages.filter((item) => {
    //         return typeof item.content === 'string'
    //           ? item.content.toLowerCase().includes(detail.data.toLowerCase())
    //           : false;
    //       })
    //     : this.storeMessage.getMessages$());
  }


  /**
   * */
  public sendTextMessage (
    message: string
  )
  {
    this.storeMessage.sendTextMessage(
      message
    );
    this.scrollToBot();
  }

  /**
   *
   * */
  public scrollToBot (
    el = this.chatMessagesContainer,
    timer = 50
  )
  {
    scrollToBot(
      el.nativeElement,
      {
        timer: timer
      }
    )
  }

  /**
   * Показ профиля юзера
   * @param detail
   */
  public visibleProfile(
    open: boolean
  ) {
    this.chatNavigateService.controlChatProfile(
      this.openedDialog.id,
      open
    );
  }
}
