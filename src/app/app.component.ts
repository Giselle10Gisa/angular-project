import { Component } from '@angular/core';
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
}
