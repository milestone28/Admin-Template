import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleService } from '../../../shared/toggle';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})

export class NavBar {

  isSidebarOpen: boolean = false;
  constructor(private toggleService: ToggleService) { }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }
}
