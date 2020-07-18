import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { StoreService } from '../store-service.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';
import { Observable } from 'rxjs';
import {
  ChatCategoryInterface, ChatContactInterface,
  ChatDialogInterface,
  ChatMessage,
} from 'stencil-chat';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {

  @ViewChild('moduleChat', {static: true}) moduleChat: ElementRef;

  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  public dialogs: ChatDialogInterface[] = [];

  public categories: ChatCategoryInterface[] = [];
  public contacts: ChatContactInterface[] = [];

  private allDialogs: ChatDialogInterface[] = [];

  public messages = this.storeMessage.getMessages();

  public getMessages() {
    return this.messages;
  }

  ngOnInit(): void {
    window['ngRef'] = this.moduleChat.nativeElement;
    this.storeMessage.getDialogs().subscribe((dataFromSever) => {
      this.dialogs = dataFromSever;
      this.cdRef.markForCheck();
    });

    this.storeMessage.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      console.log('this.categories', this.categories);
      this.cdRef.markForCheck();
    });

    this.storeMessage.getContacts().subscribe((dataFromSever) => {
      this.contacts = dataFromSever;
      console.log('this.contacts', this.contacts);
      this.cdRef.markForCheck();
    });
  }

  public getTitleModule() {
    return this.storeMessage.titleModule;
  }

  getPersonalMessage$(): Observable<ChatMessage[]> {
    // return this.storeMessage.getPersonalMessage();
    return this.storeMessage.getMessage$();
  }

  // public clickToDialog (ev: any) {}
  // public sendTextMessage (ev: any) {}
  // public showFullChat (ev: any) {}

  public clickToDialog (
  dialog: ChatDialogInterface
  )
  {
  // this.messages = MessageMock.map(
  //   (message) => (
  //     {
  //       ...message,
  //       content: (
  //         message.direction !== ChatMessageDirectionEnum.center &&
  //         message.type === ChatMessageTypeEnum.text
  //       )
  //         ? `${dialog.name}> ${message.content}`
  //         : message.content
  //     }
  //   )
  // )
  console.log(
    'clickToDialog [12]',
    dialog
  );

  }

  public showFullChat (
  ev: any
  ) {
  console.log(
    'showFullChat',
    ev
  )
  }

  public sendTextMessage (
  message: string
  )
  {
  console.log(
    'sendTextMessage [2]',
    message
  );
  // this.messages = [
  //   ...this.messages,
  //   {
  //     content: message,
  //     sender: {
  //       uid: "test-id-2",
  //       icon: "https://via.placeholder.com/60x60?text=User",
  //       name: "Адам",
  //       phone: "79291234567",
  //     },
  //     type: ChatMessageTypeEnum.text,
  //     direction: ChatMessageDirectionEnum.fromMe,
  //     time: {
  //       created: new Date(),
  //       delivery: new Date(),
  //       read: new Date(),
  //     },
  //   },
  // ]
  }
}
