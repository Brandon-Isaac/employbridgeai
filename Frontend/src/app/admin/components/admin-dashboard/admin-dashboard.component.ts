import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  template: `
    <div class="dashboard-container">
      <mat-toolbar class="toolbar" color="primary">
        <div class="toolbar-left">
          <button mat-icon-button (click)="toggleSidenav()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
              style="display: block;"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </button>
          <span class="app-title">SkillMatch AI</span>
        </div>
        <div class="toolbar-right">
          <button mat-icon-button [matBadge]="'5'" matBadgeColor="warn">
            <i class="fas fa-bell"></i>
          </button>
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <i class="	fas fa-cog"></i>
          </button>
          <mat-menu #userMenu="matMenu">
            <button mat-menu-item routerLink="profile">
              <i class="	fas fa-user"></i>
              <span>Admin Profile</span>
            </button>
            <button mat-menu-item routerLink="settings">
              <i class="	fas fa-cog"></i>
              <span>Settings</span>
            </button>
            <mat-divider></mat-divider>
            <button mat-menu-item (click)="logout()">
              <i class="	fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </mat-menu>
        </div>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="side" [opened]="true" class="sidenav">
          <mat-nav-list>
            <div class="nav-section">
              <h3 matSubheader>User Management</h3>
              <a mat-list-item routerLink="users" routerLinkActive="active">
                <span>User Accounts</span>
              </a>

              <a
                mat-list-item
                routerLink="permissions"
                routerLinkActive="active"
              >
                <span>Permissions</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section">
              <h3 matSubheader>AI Management</h3>
              <a mat-list-item routerLink="ai-models" routerLinkActive="active">
                <span>AI Models</span>
              </a>

              <a
                mat-list-item
                routerLink="accuracy-metrics"
                routerLinkActive="active"
              >
                <span>Accuracy Metrics</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section">
              <h3 matSubheader>System</h3>
              <a
                mat-list-item
                routerLink="monitoring"
                routerLinkActive="active"
              >
                <span>System Health</span>
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section">
              <h3 matSubheader>Analytics</h3>
              <a mat-list-item routerLink="analytics" routerLinkActive="active">
                <span>Platform Analytics</span>
              </a>
            </div>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="content">
          <div class="content-wrapper">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      .dashboard-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .sidenav-container {
        flex: 1;
        background-color: #f8fafc;
      }

      .sidenav {
        width: 250px;
        background-color: white;
        border-right: 1px solid #e2e8f0;
      }

      .content {
        background-color: #f8fafc;
      }

      .content-wrapper {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }

      mat-nav-list {
        padding-top: 16px;
      }

      mat-nav-list a {
        height: 48px;
        margin: 8px 12px;
        border-radius: 8px;
        color: #4a5568;
        font-weight: 500;
      }

      mat-nav-list a.active {
        background-color: #e3f2fd;
        color: #1976d2;
      }

      mat-nav-list a:hover {
        background-color: #f8fafc;
      }

      mat-nav-list a mat-icon {
        margin-right: 12px;
        color: inherit;
      }

      @media (max-width: 768px) {
        .sidenav {
          width: 200px;
        }

        .content-wrapper {
          padding: 16px;
        }
      }

      .nav-section {
        padding: 8px 0;
      }

      h3[matSubheader] {
        color: #64748b;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 16px 24px 8px;
        margin: 0;
      }

      mat-divider {
        margin: 8px 0;
      }

      .mat-badge-content {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
      }
    `,
  ],
})
export class AdminDashboardComponent {
  constructor(private authService: AuthService) {}

  toggleSidenav(): void {}

  logout(): void {
    this.authService.logout();
  }
}
