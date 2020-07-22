import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModuleComponent} from './module/module.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./comp/comp.module').then(m => m.CompModule)
  // }
  {
    path: 'module',
    component: ModuleComponent,
  },
  {
    path: '',
    loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)
  },
  // {
  //   path: '',
  //   component: CompComponent,
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
