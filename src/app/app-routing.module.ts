import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompComponent} from './comp/comp.component';
import {MobileComponent} from './mobile/mobile.component';


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
    path: '**',
    component: CompComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
