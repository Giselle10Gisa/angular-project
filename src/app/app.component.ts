import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MessagesComponent } from "./components/messages/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive, MessagesComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-project';

  darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'));

  @HostBinding('class.dark') get mode () {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    })
  }
}
