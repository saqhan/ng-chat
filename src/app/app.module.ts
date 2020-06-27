import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobilePersonalChatComponent } from './mobile/res/view/mobile-personal-chat/mobile-personal-chat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './mobile/res/view/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MobileComponent,
    MobilePersonalChatComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
