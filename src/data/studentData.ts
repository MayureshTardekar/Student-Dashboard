export interface Student {
  id: number;
  name: string;
  attendance: number;
  marks: number;
  grade: string;
  status: "Pass" | "Fail";
}

export interface SubjectMarks {
  subject: string;
  marks: number;
}

export interface MonthlyPerformance {
  month: string;
  averageMarks: number;
}

export const students: Student[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    attendance: 92,
    marks: 85,
    grade: "A",
    status: "Pass",
  },
  {
    id: 2,
    name: "Priya Patel",
    attendance: 88,
    marks: 78,
    grade: "B",
    status: "Pass",
  },
  {
    id: 3,
    name: "Rohan Kumar",
    attendance: 65,
    marks: 42,
    grade: "F",
    status: "Fail",
  },
  {
    id: 4,
    name: "Ananya Singh",
    attendance: 95,
    marks: 91,
    grade: "A+",
    status: "Pass",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    attendance: 72,
    marks: 55,
    grade: "D",
    status: "Fail",
  },
  {
    id: 6,
    name: "Ishita Gupta",
    attendance: 90,
    marks: 82,
    grade: "A",
    status: "Pass",
  },
  {
    id: 7,
    name: "Arjun Verma",
    attendance: 85,
    marks: 74,
    grade: "B",
    status: "Pass",
  },
  {
    id: 8,
    name: "Diya Mehta",
    attendance: 58,
    marks: 38,
    grade: "F",
    status: "Fail",
  },
];

export const subjectMarks: SubjectMarks[] = [
  { subject: "Mathematics", marks: 78 },
  { subject: "Science", marks: 82 },
  { subject: "English", marks: 75 },
  { subject: "History", marks: 70 },
  { subject: "Computer", marks: 85 },
];

export const monthlyPerformance: MonthlyPerformance[] = [
  { month: "Jan", averageMarks: 72 },
  { month: "Feb", averageMarks: 75 },
  { month: "Mar", averageMarks: 78 },
  { month: "Apr", averageMarks: 76 },
  { month: "May", averageMarks: 80 },
  { month: "Jun", averageMarks: 82 },
];
