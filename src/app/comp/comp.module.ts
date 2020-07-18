import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CompComponent} from "./comp.component";
import {CompContactsComponent} from "./res/view/comp-contacts/comp-contacts.component";
import {CommonModule} from "@angular/common";
import {CompRoutingModule} from "./comp-routing.module";
import {CompDialogsComponent} from "./res/view/comp-dialogs/comp-dialogs.component";

@NgModule({
  declarations: [
    CompComponent,
    CompContactsComponent,
    CompDialogsComponent,
  ],
  imports: [
    CommonModule,
    CompRoutingModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompModule {}
