import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '@ng-mf/shared/data-access-user';
@Component({
  selector: 'ng-mf-root',
  template: `
  <div class="wrapper">
  <div class="container">
    <!--  WELCOME  -->
    <div id="welcome">
      <h1>
        <span> Hello there 👋 </span>
      </h1>
    </div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
    <div class="logo-container">
    </div>
      You are authenticated so you can see this content.
      <img
    width="40"
    alt="Angular Logo"
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
  />
    </div>
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }
}