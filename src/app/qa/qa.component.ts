import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';
import { QaService } from './services/qa.service';
import { Question, Answer } from './models/question.model';

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatIconModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [provideAnimations()],
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
  @Input() courseId!: string;
  questions: Question[] = [];
  newQuestion: { title: string; content: string } = { title: '', content: '' };
  newAnswer: { [key: string]: string } = {};
  isStudent = true; // This should be determined based on user role
  isProfessor = false; // This should be determined based on user role
  userId = ''; // This should be set from auth service
  userName = ''; // This should be set from auth service

  constructor(private qaService: QaService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.qaService.getQuestionsByCourse(this.courseId)
      .subscribe(questions => {
        this.questions = questions;
      });
  }

  askQuestion() {
    if (!this.newQuestion.title.trim() || !this.newQuestion.content.trim()) return;

    const question = {
      courseId: this.courseId,
      studentId: this.userId,
      studentName: this.userName,
      title: this.newQuestion.title,
      content: this.newQuestion.content
    };

    this.qaService.addQuestion(question).subscribe(() => {
      this.loadQuestions();
      this.newQuestion = { title: '', content: '' };
    });
  }

  addAnswer(questionId: string) {
    if (!this.newAnswer[questionId]?.trim()) return;

    const answer = {
      questionId,
      professorId: this.userId,
      professorName: this.userName,
      content: this.newAnswer[questionId]
    };

    this.qaService.addAnswer(questionId, answer).subscribe(() => {
      this.loadQuestions();
      this.newAnswer[questionId] = '';
    });
  }

  deleteQuestion(questionId: string) {
    this.qaService.deleteQuestion(questionId).subscribe(() => {
      this.loadQuestions();
    });
  }

  deleteAnswer(questionId: string, answerId: string) {
    this.qaService.deleteAnswer(questionId, answerId).subscribe(() => {
      this.loadQuestions();
    });
  }
}
