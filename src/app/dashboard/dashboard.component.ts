// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout/workout.service';
import { HeaderComponent } from '../header/header.component';
import { WorkoutLogComponent } from '../workout-log/workout-log.component';
import { GoalSettingComponent } from '../goal-setting/goal-setting.component';
import { ProgressTrackingComponent } from '../progress-tracking/progress-tracking.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, WorkoutLogComponent, GoalSettingComponent, ProgressTrackingComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.logWorkout('Running');
    this.workoutService.logWorkout('Cycling');
    this.workoutService.logWorkout('Swimming');
  }
}
