import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-progress-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['./progress-tracking.component.css']
})
export class ProgressTrackingComponent implements OnInit {
  @ViewChild('progressChart') progressChart!: ElementRef;

  ngOnInit(): void {
    const ctx = this.progressChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Workout Frequency',
          data: [10, 15, 20, 25, 30, 35, 40],
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
