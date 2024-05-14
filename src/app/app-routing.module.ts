// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutLogComponent } from './workout-log/workout-log.component';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'workouts', component: WorkoutLogComponent },
  { path: 'goals', component: GoalSettingComponent },
  { path: 'progress', component: ProgressTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
