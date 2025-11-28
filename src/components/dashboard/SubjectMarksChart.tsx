import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { subjectMarks } from "@/data/studentData";

export const SubjectMarksChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subject-wise Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subjectMarks}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="subject" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                stroke="hsl(var(--border))"
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                stroke="hsl(var(--border))"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="marks" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
