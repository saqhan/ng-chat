import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LifecycleDirective} from "../directive/lifecycle/lifecycle.directive";

@NgModule({
  declarations: [
    LifecycleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LifecycleDirective
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {

}
