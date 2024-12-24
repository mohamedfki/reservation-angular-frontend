import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar-admin',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar-admin.component.html',
  styleUrl: './left-sidebar-admin.component.css'
})
export class LeftSidebarAdminComponent {
  @Input() isLeftSidebarCollapsed!: boolean;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items = [
    { routeLink: 'products', icon: 'fal fa-box-open', label: 'Products' },
    { routeLink: 'reservations', icon: 'fal fa-calendar-alt', label: 'Reservations' },
    { routeLink: 'logout', icon: 'fal fa-sign-out', label: 'Logout' },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

}
