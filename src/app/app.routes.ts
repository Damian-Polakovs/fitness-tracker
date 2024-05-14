import { Route } from '@angular/router';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { HeaderComponent } from './header/header.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';

export const routes: Route[] = [
    { path: '', redirectTo: '/goal-setting', pathMatch: 'full' },
    { path: 'goal-setting', component: GoalSettingComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'progress-tracking', component: ProgressTrackingComponent },
    { path: 'workout-log', component: WorkoutLogComponent }
  ];
