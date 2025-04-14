import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../core/services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  template: `
    <div class="dashboard-container">
      <mat-toolbar class="toolbar" color="primary">
        <div class="toolbar-left">
          <button mat-button (click)="drawer.toggle()" class="menu-button">
            Menu
          </button>
          <span class="app-title">SkillMatch AI</span>
        </div>
        <div class="toolbar-right">
          <button
            mat-button
            [matMenuTriggerFor]="userMenu"
            class="profile-button"
          >
            <i class="fas fa-user-circle"></i>
            <span>company profile</span>
          </button>
          <mat-menu #userMenu="matMenu">
            <button mat-menu-item routerLink="/company/profile">
              Company Profile
            </button>
            <button mat-menu-item routerLink="/company/settings">
              Settings
            </button>
            <mat-divider></mat-divider>
            <button mat-menu-item (click)="logout()">Logout</button>
          </mat-menu>
        </div>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          #drawer
          class="sidenav"
          fixedInViewport
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false"
        >
          <mat-nav-list>
            <div class="nav-section">
              <h3 matSubheader>JOB MANAGEMENT</h3>
              <a mat-list-item routerLink="listings" routerLinkActive="active">
                Active Listings
              </a>
              <a mat-list-item routerLink="post-job" routerLinkActive="active">
                Post New Job
              </a>
              <a mat-list-item routerLink="templates" routerLinkActive="active">
                Job Templates
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section">
              <h3 matSubheader>TALENT ACQUISITION</h3>
              <a
                mat-list-item
                routerLink="candidates"
                routerLinkActive="active"
              >
                Candidate Pool
              </a>
              <a mat-list-item routerLink="search" routerLinkActive="active">
                AI Search
              </a>
              <a
                mat-list-item
                routerLink="interviews"
                routerLinkActive="active"
              >
                Interview Schedule
              </a>
            </div>

            <mat-divider></mat-divider>

            <div class="nav-section">
              <h3 matSubheader>INSIGHTS</h3>
              <a mat-list-item routerLink="analytics" routerLinkActive="active">
                Hiring Analytics
              </a>
            </div>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="content">
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
        background: #2196f3;
      }

      .toolbar-left {
        display: flex;
        align-items: center;
        gap: 24px;
      }

      .toolbar-right {
        display: flex;
        align-items: center;
      }

      .app-title {
        font-size: 1.25rem;
        font-weight: 500;
      }

      .menu-button {
        font-weight: 400;
      }

      .profile-button {
        font-weight: 400;
      }

      .sidenav-container {
        flex: 1;
        background-color: #ffffff;
      }

      .sidenav {
        width: 250px;
        background-color: #f5f5f5;
        border-right: none;
      }

      .nav-section {
        padding: 8px 0;
      }

      mat-nav-list a {
        height: 40px;
        margin: 4px 8px;
        color: #424242;
        font-weight: 400;
        font-size: 0.9rem;
      }

      mat-nav-list a.active {
        background-color: #e3f2fd;
        color: #1976d2;
        font-weight: 500;
      }

      h3[matSubheader] {
        color: #757575;
        font-size: 0.75rem;
        font-weight: 500;
        padding: 16px 16px 8px;
        margin: 0;
      }

      mat-divider {
        margin: 8px 0;
        border-color: #e0e0e0;
      }

      .content {
        padding: 24px;
        max-width: 1200px;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        .sidenav {
          width: 240px;
        }

        .content {
          padding: 16px;
        }
      }
    `,
  ],
})
export class EmployerDashboardComponent {
  isHandset$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe('(max-width: 768px)')
      .pipe(map((result: BreakpointState) => result.matches));
  }

  logout(): void {
    this.authService.logout();
  }
}
