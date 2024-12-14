import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grading-system',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './grading-system.component.html',
  styleUrl: './grading-system.component.css'
})
export class GradingSystemComponent {

}
