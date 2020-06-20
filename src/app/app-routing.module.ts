import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompComponent} from './comp/comp.component';
import {MobileComponent} from './mobile/mobile.component';
import {MobilePersonalChatComponent} from './mobile/res/view/mobile-personal-chat/mobile-personal-chat.component';


const routes: Routes = [
  {
    path: '',
    component: CompComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'app-mobile-personal-chat',
    component: MobilePersonalChatComponent,
  },
  {
    path: '**',
    component: CompComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
