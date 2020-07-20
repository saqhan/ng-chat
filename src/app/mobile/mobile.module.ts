import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MobileRoutingModule} from "./mobile-routing.module";
import {UserProfileComponent} from "./res/view/user-profile/user-profile.component";
import {ContactsComponent} from "./res/view/contacts/contacts.component";
import {MobilePersonalChatComponent} from "./res/view/mobile-personal-chat/mobile-personal-chat.component";
import {MobileComponent} from "./mobile.component";
import {SharedModule} from "../res/module/shared.module";

@NgModule({
  declarations: [
    UserProfileComponent,
    MobilePersonalChatComponent,
    ContactsComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MobileRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileModule {}
