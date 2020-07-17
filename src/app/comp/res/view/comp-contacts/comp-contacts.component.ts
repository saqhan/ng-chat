import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ChatContactInterface, filterContactBySearchValue,} from "stencil-chat";
import {StoreService} from "../../../../store-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comp-contacts',
  templateUrl: './comp-contacts.component.html',
  styleUrls: ['./comp-contacts.component.scss']
})
export class CompContactsComponent implements OnInit {

  constructor(
    private chatStore: StoreService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  /**
   *
   */
 public contactsFiltered: ChatContactInterface[] = [];

  /**
   *
   */
  public lastSearchValue: string;

  /**
   * Тема для модульного/мобильного чата
   * */
  public theme: "mobile" | "module" | "comp" = "comp";

  /**
   *
   */
  public getContacts() {
    return this.chatStore.getContacts();
  }

  /**
   *
   */

  public disableInnerSearchContactState: boolean;

  /**
   *
   * */
  public filterContacts(
    value: string,
    allContacts: ChatContactInterface[] = this.getContacts()
  ) {
    this.lastSearchValue = value;
    if (!this.disableInnerSearchContactState) {
      this.contactsFiltered = filterContactBySearchValue(value, allContacts);
    }
  }
}
