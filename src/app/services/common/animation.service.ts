import { Injectable } from '@angular/core';

@Injectable()
export class AnimationService {

  constructor() { }

  currentAnimation: any = null;
  currentAnimationId: number = -1;
  public animations: any;

  slideToLEFT() { this.setCurrentAnimation(1); }
  slideToRIGHT() { this.setCurrentAnimation(2); }
  slideToTOP() { this.setCurrentAnimation(3); }
  slideToBOTTOM() { this.setCurrentAnimation(4); }

  private setCurrentAnimation(animationId) {
    var nextAnimation = "";
    var isDuplicate = false;

    switch (animationId) {
      case 1:
        nextAnimation = "slideToLeft";
        break;
      case 2:
        nextAnimation = "slideToRight";
        break;
      case 3:
        nextAnimation = "slideToTop";
        break;
      case 4:
        nextAnimation = "slideToBottom";
        break;
    }
    if (this.currentAnimation && (this.currentAnimation.indexOf("Duplicate") > -1)) {
      isDuplicate = true;
    }

    /* add duplicate if previous animation otherwise animation will not work */
    if ((animationId == this.currentAnimationId) && !isDuplicate) {
      nextAnimation = nextAnimation + "Duplicate";
    }
    this.currentAnimation = nextAnimation;
    this.currentAnimationId = animationId;
  }
  getCurrentAnimation() {
    return this.currentAnimation;
  }

}