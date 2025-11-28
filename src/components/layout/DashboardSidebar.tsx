import { LayoutDashboard, Users, BarChart3, Settings, BookOpen, Trophy } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "Students", icon: Users, url: "/students" },
  { title: "Analytics", icon: BarChart3, url: "/analytics" },
  { title: "Courses", icon: BookOpen, url: "/courses" },
  { title: "Performance", icon: Trophy, url: "/performance" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">EduTrack</h1>
        <p className="text-sm text-sidebar-foreground/60 mt-1">Student Monitoring</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                end
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                activeClassName="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-lg p-4">
          <p className="text-xs text-sidebar-accent-foreground font-medium mb-1">Need Help?</p>
          <p className="text-xs text-sidebar-accent-foreground/60">Check our documentation</p>
        </div>
      </div>
    </aside>
  );
};
