import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompComponent} from './comp/comp.component';
import {MobileComponent} from './mobile/mobile.component';
import {MobilePersonalChatComponent} from './mobile/res/view/mobile-personal-chat/mobile-personal-chat.component';
import {UserProfileComponent} from './mobile/res/view/user-profile/user-profile.component';
import {ModuleComponent} from './module/module.component';
import {ContactsComponent} from './mobile/res/view/contacts/contacts.component';


const routes: Routes = [
  {
    path: '',
    component: CompComponent,
  },
  // {
  //   path: 'module',
  //   component: ModuleComponent,
  // },
  // {
  //   path: 'mobile',
  //   component: MobileComponent,
  // },

  // {
  //   path: 'contacts',
  //   component: ContactsComponent,
  // },
  // {
  //   path: 'profile',
  //   component: UserProfileComponent,
  // },
  // {
  //   path: 'app-mobile-personal-chat',
  //   component: MobilePersonalChatComponent,
  // },
  // {
  //   path: '**',
  //   component: CompComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
