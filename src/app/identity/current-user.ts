export interface CurrentUser {
    email: string,
    isEmailConfirmed: boolean,
    student: Student
}

interface Student {
    id: string,
    name: string,
    gpa: number
}
