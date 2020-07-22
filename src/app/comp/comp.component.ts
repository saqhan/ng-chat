import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../store-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger,} from '@angular/animations';
import {
  ChatCategoryInterface,
  ChatContactInterface,
  ChatDialogInterface,
  ChatMessage,
  ChatUserActionStatusState,
  ChatUserPresenceState,
  filterMessageBySearchValue,
  scrollToBot
} from 'stencil-chat';
import {ChatViewEnum} from "./res/enum/common.enum";
import {ChatNavigateService} from "../chat-navigate.service";

// import {createTextMessage} from "../../../../stencil-chat/src";

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompComponent implements OnInit {
  @ViewChild('chatMessages') chatMessagesContainer: ElementRef<HTMLElement>;

  /**
   * */
  public messages: ChatMessage[] = [];

  /**
   * */
  public contacts: ChatContactInterface[] = [];

  /**
   * */
  public allMessages: ChatMessage[] = [];

  /**
   * */
  public allDialogs: ChatDialogInterface[] = [];

  /**
   * */
  public openedDialog: ChatDialogInterface;

  /**
   * */
  public categories: ChatCategoryInterface[] = [];

  /**
   * */
  public showProfile = true;

  /**
   *
   * */
  public chatViewEnum = ChatViewEnum;

  /**
   *
   * */
  public chatView = ChatViewEnum.empty;

  /**
   * Стейт для показа контактов или диалогов
   */
  public showDialogs = true;

  /**
   *
   */
  public chatActionState: ChatUserActionStatusState;

  /**
   *
   */
  public chatPresenceState: ChatUserPresenceState;

  constructor(
    private chatStore: StoreService,
    private chatNavigateService: ChatNavigateService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.startSyncMessage();
    this.activatedRoute.data.subscribe(
      (data) => {
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.showProfile = params['profile'] === 'show'
        this.showDialogs = params['contact'] !== 'show'
      }
    )


    this.chatStore.getDialogs().subscribe((dataFromSever) => {
      this.allDialogs = dataFromSever;
      this.cdRef.markForCheck();
    });

    this.chatStore.getContacts().subscribe((dataFromSever) => {
      this.contacts = dataFromSever;
      this.cdRef.markForCheck();
    });

    this.activatedRoute.params.subscribe(
      (params) => {
        if (params['chatId']) {
          this.chatStore.getDialog(parseInt(params['chatId'] , 10)).subscribe(
            (dialogFromServer) => {
              if (dialogFromServer) {
                this.openedDialog = dialogFromServer;
                this.chatView = ChatViewEnum.personal;
                this.setChatState(dialogFromServer.online);

                // this.scrollToBot(5000);
                this.cdRef.markForCheck();
              }
            }
          )
        }
      }
    )

    this.chatStore.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      this.cdRef.markForCheck();
    });
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

  private setOnlinePer ()
  {
  }

  public startSyncMessage (): void
  {
      this.chatStore.getMessages$().subscribe(
        (messagesFromServer) => {
          this.messages = this.allMessages =  messagesFromServer;
          this.cdRef.markForCheck();
        }
      )
  }

  /**
   * Лого
   */
  public getLogo() {
    return this.chatStore.getLogo();
  }

  /**
   * Сообщения
   */
  public getMessages() {
    return this.messages;
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

  /**
   *
   */
  public clickToShowFoldersHandler() {
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
  /**
   * Метод для переключения на контакты
   */
  public showDialogsOrDialogsToggle() {
    // this.showDialogsOrDialogs = !this.showDialogsOrDialogs;
    this.chatNavigateService.navigateToContact();
  }

  /**
   * */
  public navigateToPersonalChat (
    dialog: ChatDialogInterface
  )
  {
    this.chatNavigateService.navigateToPersonalChat(
      dialog.id
    );
    // this.router.navigate(
    //   [`/chat/${id}`]
    // );
  }

  /**
   * */
  public sendTextMessage (
    message: string
  )
  {
    this.chatStore.sendTextMessage(
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
}
