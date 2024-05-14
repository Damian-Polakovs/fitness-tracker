// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout/workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public workoutService: WorkoutService) { }

  ngOnInit(): void {
    // Dummy data for testing
    this.workoutService.logWorkout('Running');
    this.workoutService.logWorkout('Cycling');
    this.workoutService.logWorkout('Swimming');
  }
}
