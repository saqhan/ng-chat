import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompComponent} from "./comp.component";


const routes: Routes = [
  {
    path: 'chat',
    pathMatch: 'prefix',
    data: {
      view: 'all-chats'
    },
    // runGuardsAndResolvers: "pathParamsOrQueryParamsChange",
    component: CompComponent,
    // children: [
    //   {
    //     path: ':chatId',
    //     data: {
    //       view: 'personal'
    //     },
    //     component: CompComponent,
    //   },
    // ]
  },
  {
    path: 'chat/:chatId',
    data: {
      view: 'personal'
    },
    component: CompComponent,
  },
  // {
  //   path: 'contacts',
  //   component: CompComponent,
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
export class CompRoutingModule { }
