import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  colorClass?: string;
}

export const KPICard = ({ title, value, icon: Icon, trend, trendUp, colorClass = "text-primary" }: KPICardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <h3 className="text-3xl font-bold text-card-foreground mb-1">{value}</h3>
            {trend && (
              <p className={`text-sm font-medium ${trendUp ? 'text-success' : 'text-destructive'}`}>
                {trendUp ? '↑' : '↓'} {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-xl bg-accent/50 ${colorClass}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
