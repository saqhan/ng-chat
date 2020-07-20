import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MobileComponent} from "./mobile.component";
import {MobilePersonalChatComponent} from "./res/view/mobile-personal-chat/mobile-personal-chat.component";

const routes: Routes = [
  {
    path: 'chat',
    pathMatch: 'prefix',
    data: {
      view: 'all-chats'
    },
    // runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
    component: MobileComponent,
    // children: [
    //   {
    //     path: ':chatId',
    //     data: {
    //       view: 'personal'
    //     },
    //     component: MobileComponent,
    //   },
    // ]
  },
  {
    path: 'chat/:chatId',
    data: {
      view: 'personal'
    },
    component: MobilePersonalChatComponent,
  },
  // {
  //   path: 'contacts',
  //   component: MobileComponent,
  // },
  {
    path: '**',
    redirectTo: 'chat'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
