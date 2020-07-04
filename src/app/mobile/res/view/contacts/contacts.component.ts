import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../store-servic.service';
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

  public searchContact(e) {
    console.log('searchContact', e.currentTarget.querySelector('input').value);
    return (this.contacts =
      e.currentTarget.querySelector('input').value !== ''
        ? this.storeMessage
          .getContacts()
          .filter((item) => item.name.toLowerCase().includes(e.currentTarget.querySelector('input').value.toLowerCase()) )
        : this.storeMessage.getContacts() );
  }
}
