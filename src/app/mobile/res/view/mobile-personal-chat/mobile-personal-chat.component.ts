import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../store-servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-personal-chat',
  templateUrl: './mobile-personal-chat.component.html',
  styleUrls: ['./mobile-personal-chat.component.scss']
})
export class MobilePersonalChatComponent implements OnInit {

  constructor(private storeMessage: StoreService, private router: Router) { }

  ngOnInit(): void {
  }

  // getMessages() {
  //   return this.storeMessage.getMessages();
  // }

  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
    if (detail.place === '"showDialogs"') {
      this.router.navigate(['mobile']);
    }
  }

}
