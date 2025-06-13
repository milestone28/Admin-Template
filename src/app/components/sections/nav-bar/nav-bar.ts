import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { ToggleService } from '../../../shared/toggle';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
declare var $: any;

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})

export class NavBar implements OnInit {

  isSidebarOpen: boolean = true;
  ToggleTheme: boolean = true;
  isDesktop: boolean = true;
  private subscription: Subscription

  constructor(private toggleService: ToggleService) { }

  ngOnInit(): void {
    this.subscription = this.toggleService.sidebarState$.subscribe(
      state => this.isSidebarOpen = state
    );
    this.subscription = this.toggleService.isDarkModeState$.subscribe(
      state => this.ToggleTheme = state
    );
    this.subscription = this.toggleService.isDesktopState$.subscribe(
      state => this.isDesktop = state
    );

    if (this.isDesktop) {
      $('[data-bs-toggle="tooltip"]').tooltip({
        trigger: 'hover'
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }

  toggleTheme() {
    this.toggleService.toggleTheme();
  }
  // interval(5000).subscribe(() => {
  //   alert("test");
  // })
}
