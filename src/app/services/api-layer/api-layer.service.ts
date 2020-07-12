import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoriesMock, DialogsMock} from "../../mock";
import {delay} from "rxjs/operators";
import {ChatCategoryInterface, ChatDialogInterface} from "stencil-chat";

@Injectable({
  providedIn: 'root'
})
export class ApiLayerService {
  constructor() { }

  /**
   *
   * */
  public getDialogs (
    uid: string
  ): Observable<ChatDialogInterface[]>
  {
    return of(
      DialogsMock
    ).pipe(
      delay(1500)
    )
  }

  /**
   *
   * */
  public getCategories (
    uid: string
  ): Observable<ChatCategoryInterface[]>
  {
    return of(
      CategoriesMock
    ).pipe(
      delay(2000)
    )
  }
}
