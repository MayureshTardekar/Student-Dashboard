import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useStudents } from "@/contexts/StudentContext";
import { Student } from "@/data/studentData";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { EditStudentDialog } from "./EditStudentDialog";

export const StudentsTable = () => {
  const { students, deleteStudent } = useStudents();
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deletingStudentId, setDeletingStudentId] = useState<number | null>(null);

  const handleDelete = () => {
    if (deletingStudentId !== null) {
      deleteStudent(deletingStudentId);
      toast.success("Student deleted successfully!");
      setDeletingStudentId(null);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Student Performance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Attendance (%)</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow 
                    key={student.id} 
                    className={student.status === "Fail" ? "bg-destructive/5" : ""}
                  >
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full max-w-[100px] h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-chart-2 transition-all"
                            style={{ width: `${student.attendance}%` }}
                          />
                        </div>
                        <span className="text-sm">{student.attendance}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{student.marks}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          student.grade === "A+" || student.grade === "A" 
                            ? "border-success text-success" 
                            : student.grade === "F" 
                            ? "border-destructive text-destructive"
                            : "border-warning text-warning"
                        }
                      >
                        {student.grade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={student.status === "Pass" ? "default" : "destructive"}
                        className={student.status === "Pass" ? "bg-success hover:bg-success/90" : ""}
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setEditingStudent(student)}
                          className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setDeletingStudentId(student.id)}
                          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <EditStudentDialog
        open={editingStudent !== null}
        onOpenChange={(open) => !open && setEditingStudent(null)}
        student={editingStudent}
      />

      <AlertDialog open={deletingStudentId !== null} onOpenChange={(open) => !open && setDeletingStudentId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the student record.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
