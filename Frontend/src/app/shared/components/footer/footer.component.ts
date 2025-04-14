import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  template: `
    <mat-toolbar class="footer">
      <div class="footer-content">
        <div class="copyright">
          © 2024 SkillsMatch AI. All rights reserved.
        </div>
        <div class="footer-links">
          <a routerLink="/privacy">Privacy Policy</a>
          <a routerLink="/terms">Terms of Service</a>
          <a routerLink="/contact">Contact Us</a>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #f5f5f5;
      color: #666;
    }
    .footer-content {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    .footer-links a {
      color: #666;
      text-decoration: none;
      &:hover {
        color: #333;
      }
    }
  `]
})
export class FooterComponent {} 