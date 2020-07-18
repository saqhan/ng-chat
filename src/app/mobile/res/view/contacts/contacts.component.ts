import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../store-service.service';
import { Router } from '@angular/router';
import { AnimationService } from '../../../../services/common/animation.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService
  ) {}
  // get contacts array

  contacts = this.storeMessage.getContacts();
  ngOnInit(): void {}

  public getContacts() {
    return this.contacts;
  }
  public clickToShowDialogs() {
    this.animSRVC.slideToRIGHT();
    this.router.navigate(['mobile']);
  }
  public clickToShowContacts(){
    this.animSRVC.slideToLEFT();
    this.router.navigate(['contacts']);
  }
  public clickToShowMenuBar(){
    console.log('clickToShowMenuBar');
  }

  public clickToContact($event) {
    console.log('clickToContact', $event);
    this.animSRVC.slideToLEFT();
    this.router.navigate(['app-mobile-personal-chat']);
  }

  // клик по ссылке
  public clickToLink({ detail }) {
    if (detail.place === 'showDialogs') {
      this.animSRVC.slideToRIGHT();
      this.router.navigate(['mobile']);
    }
    if (detail.place === 'clickToContact') {
      this.animSRVC.slideToLEFT();
      this.router.navigate(['app-mobile-personal-chat']);
    }
  }

  public searchContact({ detail }) {
    // console.log('searchContact', detail.data);
    return [];
    // return (this.contacts =
      // detail.data !== '' && detail.data !== null
      //   ? this.contacts.filter((item) => {
      //       return typeof item.name === 'string'
      //         ? item.name.toLowerCase().includes(detail.data.toLowerCase())
      //         : false;
      //     })
      //   : this.storeMessage.getContacts());
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
