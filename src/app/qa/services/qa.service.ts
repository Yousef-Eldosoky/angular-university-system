import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Answer } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  private apiUrl = 'api/qa';

  constructor(private http: HttpClient) { }

  getQuestionsByCourse(courseId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions/${courseId}`);
  }

  addQuestion(question: Omit<Question, 'id' | 'createdAt'>): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/questions`, question);
  }

  addAnswer(questionId: string, answer: Omit<Answer, 'id' | 'createdAt'>): Observable<Answer> {
    return this.http.post<Answer>(`${this.apiUrl}/questions/${questionId}/answers`, answer);
  }

  deleteQuestion(questionId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/questions/${questionId}`);
  }

  deleteAnswer(questionId: string, answerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/questions/${questionId}/answers/${answerId}`);
  }
}
