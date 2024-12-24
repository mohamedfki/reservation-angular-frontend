import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftSidebarAdminComponent } from '../left-sidebar-admin/left-sidebar-admin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, LeftSidebarAdminComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isLeftSidebarCollapsed = false;
  showAdminSidebar = true;  

  constructor() {}

  ngOnInit(): void {
   
  }

  toggleSidebar(collapsed: boolean): void {
    this.isLeftSidebarCollapsed = collapsed;
  }
}
