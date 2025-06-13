import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../../shared/toggle';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  private subscription: Subscription
  isSidebarOpen: boolean = true;

  constructor(private toggleService: ToggleService) {
  }

  ngOnInit(): void {
    this.subscription = this.toggleService.sidebarState$.subscribe(
      state => this.isSidebarOpen = state
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
