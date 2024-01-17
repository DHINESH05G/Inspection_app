import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-main-screen',
  templateUrl: './inspection-main-screen.component.html',
  styleUrls: ['./inspection-main-screen.component.css']
})
export class InspectionMainScreenComponent {
  mainQuestions = [
    { text: 'Hadrons Material / Environmental Hazards', status: 'open' },
    { text: 'Electrical Safety ', status: 'completed' },
    { text: 'Pre-Task', status: 'in progress' },
    { text: 'Hadrons Material / Environmental Hazards', status: 'open' },
    { text: 'Hadrons Material / Environmental Hazards', status: 'completed' }
    // ... add additional questions as needed
  ];

  constructor(private router: Router) {}

  navigateToSubQuestion(questionIndex: number): void {
    // Change the navigation to pass the main question ID as a parameter
    this.router.navigate(['/sub-question', questionIndex]);

  }
}
