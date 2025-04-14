import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatCardModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="landing-content">
      <section class="hero-section">
        <div class="hero-content">
          <h1>Welcome to SkillsMatch AI</h1>
          <p class="subtitle">Revolutionizing the way job seekers and employers connect</p>
          <div class="cta-buttons">
            <button mat-raised-button color="primary" routerLink="/auth/signup">Get Started</button>
            <button mat-button routerLink="/auth/login">Already have an account?</button>
          </div>
        </div>
      </section>

      <section class="features-section">
        <mat-card class="feature-card">
          <h2>Smart Matching</h2>
          <p>Our AI-powered platform analyzes skills, experience, and job requirements to create perfect matches between job seekers and employers.</p>
        </mat-card>

        <mat-card class="feature-card">
          <h2>Skill Development</h2>
          <p>Get personalized recommendations for skill development based on your career goals and market demands.</p>
        </mat-card>

        <mat-card class="feature-card">
          <h2>Career Growth</h2>
          <p>Access valuable insights and resources to help you advance in your career and achieve your professional goals.</p>
        </mat-card>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .landing-content {
      min-height: calc(100vh - 128px);
      padding: 2rem;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .hero-section {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-section h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #1a237e;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }

    .features-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 4rem auto;
      padding: 0 2rem;
    }

    .feature-card {
      padding: 2rem;
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h2 {
        color: #1a237e;
        margin-bottom: 1rem;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2rem;
      }

      .features-section {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class LandingComponent {} 