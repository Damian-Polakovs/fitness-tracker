import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { GoalSettingComponent } from './app/goal-setting/goal-setting.component';
import { HeaderComponent } from './app/header/header.component';
import { ProgressTrackingComponent } from './app/progress-tracking/progress-tracking.component';
import { WorkoutLogComponent } from './app/workout-log/workout-log.component';
import { FooterComponent } from './app/footer/footer.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'workouts', component: WorkoutLogComponent },
  { path: 'goals', component: GoalSettingComponent },
  { path: 'progress', component: ProgressTrackingComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
});
