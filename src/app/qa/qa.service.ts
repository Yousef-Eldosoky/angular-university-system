import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './interface/question';
import { QuestionDto } from './interface/question-dto';
import { AnswerDto } from './interface/answer-dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/qa/questions`, {withCredentials: true});
  }

  submitQuestion(question: QuestionDto): Observable<Object> {
    return this.http.post(`${this.apiUrl}/qa/questions`, question, {withCredentials: true});
  }

  submitAnswer(questionId: number, answer: AnswerDto): Observable<Object> {
    answer.questionId = questionId;
    return this.http.post(`${this.apiUrl}/qa/answers`, answer, {withCredentials: true});
  }

  deleteQuestion(questionId: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/qa/questions/${questionId}`, {withCredentials: true});
  }

  deleteAnswer(answerId: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/qa/answers/${answerId}`, {withCredentials: true});
  }
}
