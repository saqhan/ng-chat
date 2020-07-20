import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { StoreService } from '../../../../store-service.service';
import { Router } from '@angular/router';
import { AnimationService } from '../../../../services/common/animation.service';
import {ChatContactInterface, filterContactBySearchValue} from "stencil-chat";
import {ChatNavigateService} from "../../../../chat-navigate.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() contacts: ChatContactInterface[] = [];

  /**
   * */
  public allContacts: ChatContactInterface[] = [];

  /**
   *
   */
  public lastSearchValue: string;

  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private chatNavigateService: ChatNavigateService,
    private animSRVC: AnimationService
  ) {}


  ngOnInit(): Promise<void> | void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.allContacts = this.contacts;
    this.filterContacts(this.lastSearchValue);
  }

  // public getContacts() {
  //   return this.contacts;
  // }
  public clickToShowDialogs() {
    this.animSRVC.slideToRIGHT();
    this.chatNavigateService.navigateToChats();
  }
  public clickToShowContacts(){
    this.animSRVC.slideToLEFT();
    // this.router.navigate(['contacts']);
  }
  public clickToShowMenuBar(){
    console.log('clickToShowMenuBar');
  }

  public clickToContact($event) {
    console.log('clickToContact', $event);
    this.animSRVC.slideToLEFT();
    // this.router.navigate(['app-mobile-personal-chat']);
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    if (detail.place === 'showDialogs') {
      this.animSRVC.slideToRIGHT();
      // this.router.navigate(['mobile']);
    }
    if (detail.place === 'clickToContact') {
      this.animSRVC.slideToLEFT();
      // this.router.navigate(['app-mobile-personal-chat']);
    }
  }

  /**
   *
   * */
  public filterContacts(
    value: string
  ) {
    this.contacts = filterContactBySearchValue(
      value,
      this.allContacts
    )
  }

  // Поиск контактов

  // public searchContact({detail}) {
  //   console.log('searchMessage 1 ', detail.data);
  //   return (this.messages =
  //     detail.data !== '' && detail.data !== null
  //       ? this.messages
  //         .filter((item) => {
  //           return (typeof item.content === 'string' )
  //             ? (item.content).toLowerCase().includes(detail.data.toLowerCase())
  //             : false;
  //         } )
  //       : this.storeMessage.getMessages() );
  // }
}
