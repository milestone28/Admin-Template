import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private isSidebarOpen = new BehaviorSubject<boolean>(true);
  constructor() { }

  sidebarState$ = this.isSidebarOpen.asObservable();

  toggleSidebar() {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }
}
