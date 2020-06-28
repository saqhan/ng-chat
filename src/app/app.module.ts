import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobilePersonalChatComponent } from './mobile/res/view/mobile-personal-chat/mobile-personal-chat.component';
import { UserProfileComponent } from './mobile/res/view/user-profile/user-profile.component';
import {AnimationService} from './services/common/animation.service';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MobileComponent,
    MobilePersonalChatComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [AnimationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
