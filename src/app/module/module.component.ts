import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StoreService } from '../store-service.service';
import { Router } from '@angular/router';
import { AnimationService } from '../services/common/animation.service';
import { Observable } from 'rxjs';
import {
  ChatCategoryInterface,
  ChatDialogInterface,
  ChatMessage,
} from 'stencil-chat';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

  public dialogs: ChatDialogInterface[] = [];

  public categories: ChatCategoryInterface[] = [];

  private allDialogs: ChatDialogInterface[] = [];

  public messages = this.storeMessage.getMessages();

  public getMessages() {
    return this.messages;
  }

  ngOnInit(): void {
    this.storeMessage.getDialogs().subscribe((dataFromSever) => {
      this.dialogs = dataFromSever;
      console.log('this.dialogs', this.dialogs);
      this.cdRef.markForCheck();
    });

    this.storeMessage.getCategories().subscribe((dataFromSever) => {
      this.categories = dataFromSever;
      console.log('this.categories', this.categories);
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
}
