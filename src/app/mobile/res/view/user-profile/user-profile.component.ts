import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../../store-service.service';
import { AnimationService } from '../../../../services/common/animation.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private storeMessage: StoreService,
    private router: Router,
    private animSRVC: AnimationService
  ) {}

  ngOnInit(): void {}
  // клик по ссылке
  public clickToShowDialogs({ detail }) {
    this.animSRVC.slideToRIGHT();
    this.router.navigate(['app-mobile-personal-chat']);
  }
}
