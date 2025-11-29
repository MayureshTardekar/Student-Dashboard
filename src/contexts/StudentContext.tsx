import { Student, students as defaultStudents } from "@/data/studentData";
import { calculateGrade, calculateStatus, generateStudentId } from "@/lib/gradeCalculator";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface StudentContextType {
  students: Student[];
  addStudent: (student: Omit<Student, "id" | "grade" | "status">) => void;
  updateStudent: (id: number, student: Partial<Student>) => void;
  deleteStudent: (id: number) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const STORAGE_KEY = "edutrack_students";

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>(() => {
    // Load from localStorage or use default data
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored students:", e);
        return defaultStudents;
      }
    }
    return defaultStudents;
  });

  // Save to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  const addStudent = (studentData: Omit<Student, "id" | "grade" | "status">) => {
    const newStudent: Student = {
      ...studentData,
      id: generateStudentId(students),
      grade: calculateGrade(studentData.marks),
      status: calculateStatus(studentData.marks),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (id: number, updates: Partial<Student>) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === id) {
          const updated = { ...student, ...updates };
          // Recalculate grade and status if marks changed
          if (updates.marks !== undefined) {
            updated.grade = calculateGrade(updates.marks);
            updated.status = calculateStatus(updates.marks);
          }
          return updated;
        }
        return student;
      })
    );
  };

  const deleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudents must be used within a StudentProvider");
  }
  return context;
};
