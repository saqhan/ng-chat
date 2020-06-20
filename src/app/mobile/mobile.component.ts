import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store-servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  constructor(private storeMessage: StoreService, private router: Router) {}

  ngOnInit(): void {}

  getDialogs() {
    return this.storeMessage.getDialogs();
  }

  getCategories() {
    return this.storeMessage.getCategories();
  }

  public clickToLink({ detail }) {
    console.log('clickToLink', detail);
    if (detail.place === 'showPersonalDialog') {
      this.router.navigate(['app-mobile-personal-chat']);
    }
  }
}
