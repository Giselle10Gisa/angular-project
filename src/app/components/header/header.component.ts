import { CommonModule, NgIf } from '@angular/common';
import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgIf],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isDark: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme.subscribe(
      dark => this.isDark = dark
    )
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
