import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { map, filter } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTodo';
  isLoggedIn: boolean;
  userType: string;
  currentYear: number;
  url: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.auth.isLoggedIn()) {
      this.userType = this.auth.getUserType();
    }
    this.currentYear = (new Date()).getFullYear()
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e: NavigationEnd) => this.url = e.urlAfterRedirects)
    ).subscribe();
  }
}