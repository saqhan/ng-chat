import { Injectable } from '@angular/core';
import {ChatDialogInterface} from "./res/interface/common.interface";
import {Observable, of} from "rxjs";
import {DialogsMock} from "../../mock";
import {delay} from "rxjs/operators";

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
