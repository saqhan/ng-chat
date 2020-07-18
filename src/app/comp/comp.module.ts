import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {CompComponent} from "./comp.component";
import {MobileComponent} from "../mobile/mobile.component";
import {MobilePersonalChatComponent} from "../mobile/res/view/mobile-personal-chat/mobile-personal-chat.component";
import {UserProfileComponent} from "../mobile/res/view/user-profile/user-profile.component";
import {ModuleComponent} from "../module/module.component";
import {ContactsComponent} from "../mobile/res/view/contacts/contacts.component";
import {CompContactsComponent} from "./res/view/comp-contacts/comp-contacts.component";
import {AnimationService} from "../services/common/animation.service";
import {CommonModule} from "@angular/common";
import {CompRoutingModule} from "./comp-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MobileComponent,
    MobilePersonalChatComponent,
    UserProfileComponent,
    ModuleComponent,
    ContactsComponent,
    CompContactsComponent,
  ],
  imports: [
    CommonModule,
    CompRoutingModule,
  ],
  providers: [AnimationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompModule {}
