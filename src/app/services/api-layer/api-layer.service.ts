import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoriesMock, ContactsMock, DialogsMock} from "../../mock";
import {delay} from "rxjs/operators";
import {ChatCategoryInterface, ChatContactInterface, ChatDialogInterface} from "stencil-chat";

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

  /**
   *
   * */
  public getContacts (
    uid: string
  ): Observable<ChatContactInterface[]>
  {
    return of(
      ContactsMock
    ).pipe(
      delay(1000)
    )
  }
}
