import { Routes } from '@angular/router';
import { JobSeekerDashboardComponent } from './components/job-seeker-dashboard/job-seeker-dashboard.component';
import { SkillManagementComponent } from './components/skill-management/skill-management.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { CareerPathsComponent } from './components/career-paths/career-paths.component';
import { LearningResourcesComponent } from './components/learning/learning-resources.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobMatchesComponent } from './components/job-matches/job-matches.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfileManagerComponent } from './components/cv-manager/cv-manager.component';

export const JOB_SEEKER_ROUTES: Routes = [
  {
    path: '',
    component: JobSeekerDashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'skills',
        component: SkillManagementComponent,
      },
      {
        path: 'interviews',
        component: InterviewsComponent,
      },
      {
        path: 'career-paths',
        component: CareerPathsComponent,
      },
      {
        path: 'learning',
        component: LearningResourcesComponent,
      },
      {
        path: '',
        redirectTo: 'skills',
        pathMatch: 'full',
      },
      {
        path: 'matches',
        component: JobMatchesComponent,
      },
      {
        path: 'applications',
        component: ApplicationsComponent,
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
      },
      {
        path: 'cv',
        component: ProfileManagerComponent,
      },
    ],
  },
];
