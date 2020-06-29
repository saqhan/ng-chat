import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationService } from '../common/animation.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private router: Router, private animSRVC: AnimationService) { }

  ngOnInit() {
  }

  gotoLOGIN() {
    this.animSRVC.slideToBOTTOM();
    this.router.navigateByUrl("login");
  }

  gotoDASHBOARD() {
    this.animSRVC.slideToRIGHT();
    this.router.navigateByUrl("dashboard");
  }

}