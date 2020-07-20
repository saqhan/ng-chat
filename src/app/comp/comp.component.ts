import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StoreService} from '../store-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger,} from '@angular/animations';
import {chatConvertWritingStatusToMessage, ChatDialogInterface, ChatMessage,} from 'stencil-chat';
import {ChatViewEnum} from "./res/enum/common.enum";
import {map} from "rxjs/operators";
import {ChatMessageDirectionEnum, ChatMessageTypeEnum} from "../../../../stencil-chat/src";
import {Observable} from "rxjs";

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
  /**
   * */
  public messages = [];

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
  public showContactsOrDialogs = true;

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
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data) => {
        console.log(
          'data',
          data
        );
      }
    );

    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(
          'route params',
          params
        );
        if (params['chatId']) {
          this.chatStore.getDialog(parseInt(params['chatId'] , 10)).subscribe(
            (dialogFromServer) => {
              if (dialogFromServer) {
                this.chatView = ChatViewEnum.personal;
                this.downloadMessage(dialogFromServer);
              }
            }
          )
        }
      }
    )
  }

  public downloadMessage (
    dialog: ChatDialogInterface
  ): void
  {
      this.chatStore.getMessages().pipe(
        map(
          (messages) => {
            return messages?.map(
              (message) => {
                return {
                  ...message,
                  content: (
                    message.direction !== ChatMessageDirectionEnum.center &&
                    message.type === ChatMessageTypeEnum.text
                  )
                    ? `${dialog.name}> ${message.content}`
                    : message.content
                }
              }
            )
          }
        )
      ).subscribe(
        (messagesFromServer) => {
          this.messages = messagesFromServer;
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

  // /**
  //  * Стейт для переключения личного профиля
  //  */
  // public getProfileVisible() {
  //   return this.chatStore.profileVisible;
  // }
  //
  // /**
  //  * Стейт для переключения личного на личный чат
  //  */
  // public getDialogVisible() {
  //   return this.chatStore.dialogVisible;
  // }

  /**
   * Показ профиля юзера
   * @param detail
   */
  public visibleProfile() {
    this.chatStore.profileVisible = !this.chatStore.profileVisible;
  }

  /**
   * Поиск сообщений
   * @param detail
   */
  public searchPersonalMessage({ detail }) {
    console.log('searchMessage 1 ', detail.data);
    // return (this.messages =
    //   detail.data !== '' && detail.data !== null
    //     ? this.messages.filter((item) => {
    //         return typeof item.content === 'string'
    //           ? item.content.toLowerCase().includes(detail.data.toLowerCase())
    //           : false;
    //       })
    //     : this.chatStore.getMessages());
  }

  /**
   * Сброс поика сообщений
   */
  public resetMessagesFilter() {
    // this.messages = this.chatStore.getMessages();
  }

  /**
   *
   */
  public getWriting = this.chatStore.writing;

  public chatConvertWritingStatusToMessage() {
    return chatConvertWritingStatusToMessage(this.getWriting[0]);
  }

  /**
   * Метод для переключения на контакты
   */
  public showContactsOrDialogsToggle() {
    this.showContactsOrDialogs = !this.showContactsOrDialogs;
    console.log(this.showContactsOrDialogs)
  }

  /**
   * */
  public navigateToPersonalChat (
    id: number
  )
  {
    this.router.navigate(
      [`/chat/${id}`]
    );

  }
}
