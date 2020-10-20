import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTodo';
  currentYear: number;
  url: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear()
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e: NavigationEnd) => this.url = e.urlAfterRedirects)
    ).subscribe();
  }
}