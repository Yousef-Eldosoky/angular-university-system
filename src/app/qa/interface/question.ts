import { Answer } from "./answer";

export interface Question {
    id: number;
    courseId: number;
    studentId: string;
    title: string;
    content: string;
    answers: Answer[];
  }