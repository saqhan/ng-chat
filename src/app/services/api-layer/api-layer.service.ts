import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {DialogsMock} from "../../mock";
import {delay} from "rxjs/operators";
import {ChatDialogInterface} from "stencil-chat";

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
}