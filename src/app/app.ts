import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/sections/nav-bar/nav-bar";
import { SideBar } from "./components/sections/side-bar/side-bar";
import { Dashboard } from "./components/pages/dashboard/dashboard";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToggleService } from './shared/toggle';
import { Footer } from "./components/sections/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, SideBar, CommonModule, Footer, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  isSidebarOpen: boolean = true;
  protected title = 'Admin Template';
  private subscription: Subscription

  constructor(private toggleService: ToggleService,) { }

  ngOnInit(): void {
    this.subscription = this.toggleService.sidebarState$.subscribe(
      state => this.isSidebarOpen = state
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
