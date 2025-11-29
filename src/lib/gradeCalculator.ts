import { Student } from "@/data/studentData";

export const calculateGrade = (marks: number): string => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
};

export const calculateStatus = (marks: number): "Pass" | "Fail" => {
    return marks >= 50 ? "Pass" : "Fail";
};

export const validateStudentData = (data: Partial<Student>): string[] => {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length === 0) {
        errors.push("Name is required");
    }

    if (data.attendance === undefined || data.attendance < 0 || data.attendance > 100) {
        errors.push("Attendance must be between 0 and 100");
    }

    if (data.marks === undefined || data.marks < 0 || data.marks > 100) {
        errors.push("Marks must be between 0 and 100");
    }

    return errors;
};

export const generateStudentId = (existingStudents: Student[]): number => {
    if (existingStudents.length === 0) return 1;
    const maxId = Math.max(...existingStudents.map(s => s.id));
    return maxId + 1;
};
