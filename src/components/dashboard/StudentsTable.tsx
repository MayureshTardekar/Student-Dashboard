import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { students } from "@/data/studentData";

export const StudentsTable = () => {
  return (
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
