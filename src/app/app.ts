import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/sections/nav-bar/nav-bar";
import { SideBar } from "./components/sections/side-bar/side-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my_portfolio';
}
