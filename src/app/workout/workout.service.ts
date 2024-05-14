import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  recentWorkouts: string[] = [];

  constructor() { }

  logWorkout(workout: string) {
    this.recentWorkouts.unshift(workout);
  }
}
