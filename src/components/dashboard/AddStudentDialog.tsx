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
import { validateStudentData } from "@/lib/gradeCalculator";
import { useState } from "react";
import { toast } from "sonner";

interface AddStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddStudentDialog = ({ open, onOpenChange }: AddStudentDialogProps) => {
  const { addStudent } = useStudents();
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    marks: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    addStudent(studentData);
    toast.success("Student added successfully!");
    setFormData({ name: "", attendance: "", marks: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>
            Add a new student to the dashboard. Grade and status will be calculated automatically.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Student Name</Label>
              <Input
                id="name"
                placeholder="Enter student name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="attendance">Attendance (%)</Label>
              <Input
                id="attendance"
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
              <Label htmlFor="marks">Marks</Label>
              <Input
                id="marks"
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
            <Button type="submit">Add Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
