import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-goal-setting',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './goal-setting.component.html',
  styleUrl: './goal-setting.component.css'
})
export class GoalSettingComponent {
  constructor(){}
}
