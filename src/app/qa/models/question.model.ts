export interface Question {
    id?: string;
    courseId: string;
    studentId: string;
    studentName: string;
    title: string;
    content: string;
    createdAt: Date;
    answers?: Answer[];
}

export interface Answer {
    id?: string;
    questionId: string;
    professorId: string;
    professorName: string;
    content: string;
    createdAt: Date;
}
