import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './interface/question';
import { QuestionDto } from './interface/question-dto';
import { AnswerDto } from './interface/answer-dto';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  constructor(private http: HttpClient) {}

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/api/qa/questions');
  }

  submitQuestion(question: QuestionDto): Observable<Object> {
    return this.http.post('/api/qa/questions', question);
  }

  submitAnswer(questionId: number, answer: AnswerDto): Observable<Object> {
    answer.questionId = questionId;
    return this.http.post('/api/qa/answers', answer);
  }

  deleteQuestion(questionId: number): Observable<Object> {
    return this.http.delete(`/api/qa/questions/${questionId}`);
  }

  deleteAnswer(answerId: number): Observable<Object> {
    return this.http.delete(`/api/qa/answers/${answerId}`);
  }
}
