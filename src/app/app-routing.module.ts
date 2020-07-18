import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./comp/comp.module').then(m => m.CompModule)
  }
  // {
  //   path: '',
  //   component: CompComponent,
  // },
  // {
  //   path: 'module',
  //   component: ModuleComponent,
  // },
  // {
  //   path: 'mobile',
  //   component: MobileComponent,
  // },
  //
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
