import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { monthlyPerformance } from "@/data/studentData";

export const MonthlyPerformanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Performance Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
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
              <Line 
                type="monotone" 
                dataKey="averageMarks" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--chart-2))', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
