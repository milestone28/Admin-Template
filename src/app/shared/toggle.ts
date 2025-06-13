import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private isSidebarOpen = new BehaviorSubject<boolean>(true);
  private isDesktop = new BehaviorSubject<boolean>(true);
  private isDarkMode = new BehaviorSubject<boolean>(true);
  constructor(private deviceService: DeviceDetectorService) {
    this.checkDevice();
  }

  sidebarState$: Observable<boolean> = this.isSidebarOpen.asObservable();
  isDesktopState$ = this.isDesktop.asObservable();
  isDarkModeState$ = this.isDarkMode.asObservable();

  toggleSidebar() {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }
  toggleTheme() {
    this.isDarkMode.next(!this.isDarkMode.value);
  }
  checkDevice() {
    this.isDesktop.next(this.deviceService.isDesktop());
  }
}
