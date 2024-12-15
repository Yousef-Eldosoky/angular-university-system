import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QaService } from './qa.service';
import { Question } from './interface/question';
import { QuestionDto } from './interface/question-dto';
import { AnswerDto } from './interface/answer-dto';


@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class QaComponent implements OnInit {
  questions: Question[] = [];
  newQuestion: QuestionDto = { courseId: 0, title: '', content: '' };
  newAnswer: AnswerDto = { questionId: 0, content: '' };

  constructor(private qa: QaService) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.qa.loadQuestions().subscribe(
      questions => this.questions = questions
    );
  }

  submitQuestion(): void {
    this.qa.submitQuestion(this.newQuestion).subscribe(() => {
      this.loadQuestions();
      this.newQuestion = { courseId: 0, title: '', content: '' };
    });
  }

  submitAnswer(questionId: number): void {
    this.qa.submitAnswer(questionId, this.newAnswer).subscribe(() => {
      this.loadQuestions();
      this.newAnswer = { questionId: 0, content: '' };
    });
  }

  deleteQuestion(questionId: number): void {
    this.qa.deleteQuestion(questionId).subscribe(() => {
      this.loadQuestions();
    });
  }

  deleteAnswer(answerId: number): void {
    this.qa.deleteAnswer(answerId).subscribe(() => {
      this.loadQuestions();
    });
  }
  
}
