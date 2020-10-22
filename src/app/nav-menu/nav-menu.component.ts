import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isCollapsed = true;
  isLoggedIn: boolean;
  userType: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.auth.isLoggedIn()) {
      this.userType = this.auth.getUserType();
    }
  }
}
