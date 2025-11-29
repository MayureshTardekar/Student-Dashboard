import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStudents } from "@/contexts/StudentContext";
import { Student } from "@/data/studentData";
import { validateStudentData } from "@/lib/gradeCalculator";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface EditStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: Student | null;
}

export const EditStudentDialog = ({ open, onOpenChange, student }: EditStudentDialogProps) => {
  const { updateStudent } = useStudents();
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    marks: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        attendance: student.attendance.toString(),
        marks: student.marks.toString(),
      });
    }
  }, [student]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!student) return;

    const studentData = {
      name: formData.name,
      attendance: parseFloat(formData.attendance),
      marks: parseFloat(formData.marks),
    };

    const errors = validateStudentData(studentData);
    if (errors.length > 0) {
      toast.error(errors.join(", "));
      return;
    }

    updateStudent(student.id, studentData);
    toast.success("Student updated successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
          <DialogDescription>
            Update student information. Grade and status will be recalculated automatically.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Student Name</Label>
              <Input
                id="edit-name"
                placeholder="Enter student name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-attendance">Attendance (%)</Label>
              <Input
                id="edit-attendance"
                type="number"
                min="0"
                max="100"
                step="0.1"
                placeholder="0-100"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-marks">Marks</Label>
              <Input
                id="edit-marks"
                type="number"
                min="0"
                max="100"
                step="0.1"
                placeholder="0-100"
                value={formData.marks}
                onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Update Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
