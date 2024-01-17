import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-question-screen',
  templateUrl: './sub-question-screen.component.html',
  styleUrls: ['./sub-question-screen.component.css']
})
export class SubQuestionScreenComponent implements OnInit {
  mainQuestionIndex!: number;
  subQuestions!: any[]; // The structure of sub-questions will be dependent on the main question
  mainQuestion!:any[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainQuestionIndex = +params['id']; // Convert to number

      // Define sub-questions based on the main question
      
      if (this.mainQuestionIndex === 0) { // For Question 1
        this.subQuestions = [
          { text: '1.Was the equipment functioning properly?', type: 'radio', options: ['Yes', 'No', 'N/A'] },
          { text: '2.Provide comments on the safety signage visibility:', type: 'textarea' },
          { text: '3.Take a picture and attach:', type: 'input'}  
          // ... more sub-questions for Question 1
        ];
      } 
      else
      {
        this.subQuestions = [
          { text: '1.Was the equipment functioning properly?', type: 'radio', options: ['Yes', 'No', 'N/A'] },
          { text: '2.Provide comments on the safety signage visibility:', type: 'textarea' },
          { text: '3.Take a picture and attach:', type: 'input'}  
          // ... more sub-questions for Question any
        ];
      }
      // ...  other main questions
    });
  }
}
