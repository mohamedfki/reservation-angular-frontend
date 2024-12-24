import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  logout(): void {
    // Logic for logging out
    console.log('Logged out');
  }

}
