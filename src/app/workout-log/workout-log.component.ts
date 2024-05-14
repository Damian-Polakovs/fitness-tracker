import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout/workout.service'; 

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent implements OnInit {
  exercise: string = '';

  constructor(private workoutService: WorkoutService) { } 

  ngOnInit(): void {
  }

  logWorkout() {
    this.workoutService.logWorkout(this.exercise);
    this.exercise = ''; 
  }
}
