import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
