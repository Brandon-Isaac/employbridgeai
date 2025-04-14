import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="header">
      <div class="logo">
        <h1>SkillsMatch AI</h1>
      </div>
      <div class="nav-buttons">
        <button mat-button routerLink="/auth/login">Login</button>
        <button mat-raised-button color="accent" routerLink="/auth/signup">Sign Up</button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }
    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .nav-buttons {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class HeaderComponent {} 