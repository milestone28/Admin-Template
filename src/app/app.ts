import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/sections/nav-bar/nav-bar";
import { SideBar } from "./components/sections/side-bar/side-bar";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToggleService } from './shared/toggle';
import { Footer } from "./components/sections/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, SideBar, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isDesktopDevice: boolean = false;
  ToggleTheme: boolean = false;
  protected title = 'Admin Template';
  private subscription: Subscription

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.subscription = this.toggleService.isDesktopState$.subscribe(
      state => this.isDesktopDevice = state
    );
    this.subscription = this.toggleService.isDarkModeState$.subscribe(
      state => this.ToggleTheme = state
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
