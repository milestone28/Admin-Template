import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToggleService } from '../../../shared/toggle';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar implements OnInit {
  isSidebarOpen: boolean = false;
  ToggleTheme: boolean = false;
  private subscription: Subscription

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.subscription = this.toggleService.sidebarState$.subscribe(
      state => this.isSidebarOpen = state
    );
    this.subscription = this.toggleService.isDarkModeState$.subscribe(
      state => this.ToggleTheme = state
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
