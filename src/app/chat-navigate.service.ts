import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable(
  {
    providedIn: "root"
  }
) export class ChatNavigateService {

  constructor(
    private router: Router
  ) {
  }

  /**
   * */
  public navigateToPersonalChat (
    id: number
  )
  {
    this.router.navigate(
      [`/chat/${id}`]
    );
  }

  /**
   * */
  public navigateToContact ()
  {
    this.router.navigate(
      [`/chat`],
      {
        queryParams: {
          contact: open ? 'show' : null
        },
        queryParamsHandling: "merge"
      }
    );
  }

  /**
   * */
  public navigateToChats ()
  {
    this.router.navigate(
      [`/chat`]
    );
  }

  /**
   * */
  public controlChatProfile (
    id: number,
    open: boolean
  )
  {
    this.router.navigate(
      [`/chat/${id}`],
      {
        queryParams: {
          profile: open ? 'show' : null
        },
        queryParamsHandling: "merge"
      }
    );
  }
}
