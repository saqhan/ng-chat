import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChatContactInterface, filterContactBySearchValue} from 'stencil-chat';
import { StoreService } from '../../../../store-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-contacts',
  templateUrl: './comp-contacts.component.html',
  styleUrls: ['./comp-contacts.component.scss'],
})
export class CompContactsComponent implements OnInit, OnChanges {

  @Input() contacts: ChatContactInterface[] = [];

  /**
   * */
  public allContacts: ChatContactInterface[] = [];

  constructor(
    private chatStore: StoreService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): Promise<void> | void {
    this.filterContacts(this.lastSearchValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.allContacts = this.contacts;
    this.allContacts = this.contacts;
    this.filterContacts(this.lastSearchValue);
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
  public theme: 'mobile' | 'module' | 'comp' = 'comp';

  /**
   *
   */
  public getContacts() {
    return [];
  }

  /**
   *
   */

  public disableInnerSearchContactState: boolean;

  /**
   *
   * */
  public filterContacts(
    value: string
  ) {
    this.contacts = filterContactBySearchValue(
      value,
      this.allContacts
    )
  }
}
