import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoriesMock, ContactsMock, DialogsMock, MessageMock} from "../../mock";
import {delay, map} from "rxjs/operators";
import {ChatCategoryInterface, ChatContactInterface, ChatDialogInterface, ChatMessage} from "stencil-chat";

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
  public getDialog (
    uid: string,
    dialogId: number
  ): Observable<ChatDialogInterface>
  {
    return of(
      DialogsMock
    ).pipe(
      delay(200)
    ).pipe(
      map(
        (dialogs) => dialogs.find(
          (dialog) => dialog.id === dialogId
        )
      )
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
  /**
   *
   * */
  public getMessages (
    uid: string
  ): Observable<ChatMessage[]>
  {
    return of(
      MessageMock
    ).pipe(
      delay(150)
    )
  }
}
