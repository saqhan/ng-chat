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
import { ModuleComponent } from './module/module.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ContactsComponent } from './mobile/res/view/contacts/contacts.component';
import { CompDialogsComponent } from './comp/res/view/comp-dialogs/comp-dialogs.component';
import { CompContactsComponent } from './comp/res/view/comp-contacts/comp-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MobileComponent,
    MobilePersonalChatComponent,
    UserProfileComponent,
    ModuleComponent,
    ContactsComponent,
    CompDialogsComponent,
    CompContactsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatSliderModule, MatSidenavModule],
  providers: [AnimationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
