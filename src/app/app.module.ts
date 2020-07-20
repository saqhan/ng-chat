import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnimationService} from './services/common/animation.service';
import {ModuleComponent} from "./module/module.component";

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [AnimationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
